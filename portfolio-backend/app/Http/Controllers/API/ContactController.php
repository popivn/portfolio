<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Models\User;
use App\Notifications\NewContactNotification;
use Illuminate\Support\Facades\Notification;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        try {
            $validated = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email',
                'message' => 'required|string',
            ]);

            $contact = Contact::create($validated);

            // Send email notification
            try {
                Notification::route('mail', 'hieutt.fw@gmail.com')
                    ->notify(new NewContactNotification($contact));
            } catch (\Exception $e) {
                Log::error('Failed to send email notification: ' . $e->getMessage());
            }

            // Send database notification to all admin users
            try {
                $admins = User::where('is_admin', true)->get();
                Notification::send($admins, new NewContactNotification($contact));
            } catch (\Exception $e) {
                Log::error('Failed to send database notification: ' . $e->getMessage());
            }

            return response()->json([
                'success' => true,
                'message' => "Successfully sent! Thank you {$contact->name}, we will contact you soon."
            ]);
        } catch (\Exception $e) {
            Log::error('Contact form error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}


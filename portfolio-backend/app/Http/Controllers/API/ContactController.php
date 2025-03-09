<?php

namespace App\Http\Controllers\API;

use Illuminate\Http\Request;
use App\Models\Contact;
use App\Notifications\NewContactNotification;
use Illuminate\Support\Facades\Notification;
use App\Http\Controllers\Controller;

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

            try {
                Notification::route('mail', 'admin@example.com')
                    ->notify(new NewContactNotification($contact));
            } catch (\Exception $e) {
                \Log::error('Failed to send notification: ' . $e->getMessage());
            }

            return response()->json([
                'success' => true,
                'message' => "Successfully sent! Thank you {$contact->name}, we will contact you soon."
            ]);
        } catch (\Exception $e) {
            \Log::error('Contact form error: ' . $e->getMessage());

            return response()->json([
                'success' => false,
                'message' => 'An error occurred while processing your request.',
                'error' => $e->getMessage()
            ], 500);
        }
    }
}

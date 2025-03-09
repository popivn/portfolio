<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Contact;

class ContactController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
        $this->middleware('admin');
    }

    public function index()
    {
        $contacts = Contact::latest()->paginate(10);
        return view('admin.contacts.index', compact('contacts'));
    }

    public function show($id, Request $request)
    {
        $contact = Contact::findOrFail($id);

        // Mark notification as read if notification ID is provided
        if ($request->has('notification')) {
            auth()->user()->notifications()->where('id', $request->notification)->first()?->markAsRead();
        }

        return view('admin.contacts.show', compact('contact'));
    }
}


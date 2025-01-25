<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\UserDetail;

class UserDetailController extends Controller
{
    public function index()
    {
        return view('user-detail');
    }
    public function store(Request $request)
    {
        $validated = $request->validate([
            'nickname' => 'required|string|max:255',
            'birthday' => 'required|date',
            'school' => 'nullable|string|max:255',
            'start_learning_at' => 'nullable|date',
            'end_learning_at' => 'nullable|date',
            'status' => 'required|string|max:255',
            'description' => 'nullable|string',
            'profile_image' => 'nullable|image|mimes:jpeg,png,jpg|max:2048',
            'portfolio_link' => 'nullable|url',
        ]);

        $userDetail = new UserDetail($validated);
        $userDetail->user_id = auth()->id();

        if ($request->hasFile('profile_image')) {
            $userDetail->profile_image = $request->file('profile_image')->store('profile_images', 'public');
        }

        $userDetail->save();

        return redirect()->route('dashboard')->with('success', 'User details added successfully!');
    }
}

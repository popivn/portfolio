<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class NotificationController extends Controller
{
    // Khai báo middlewares ở đây
    protected $middleware = [
        'auth'
    ];

    // Xóa hàm constructor
    // public function __construct()
    // {
    //     $this->middleware('auth');
    // }

    public function markAsRead(Request $request, $id)
    {
        $notification = auth()->user()->notifications()->findOrFail($id);
        $notification->markAsRead();

        return redirect()->back();
    }

    public function markAllAsRead()
    {
        auth()->user()->unreadNotifications->markAsRead();

        return redirect()->back();
    }

    // Thêm phương thức getNotifications bị thiếu
    public function getNotifications()
    {
        $notifications = auth()->user()->unreadNotifications;
        return response()->json($notifications);
    }
}

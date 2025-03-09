<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserDetailController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ContactController;
use App\Http\Controllers\NotificationController;

include('api.php');
include('auth.php');

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::get('/user_detail', [UserDetailController::class, 'index'])
    ->middleware(['auth'])
    ->name('user.detail');;
Route::post('/user-detail', [UserDetailController::class, 'store'])->name('user-detail.store');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::get('/user-detail', [UserDetailController::class, 'index'])->name('user-detail.index');
    Route::post('/user-detail', [UserDetailController::class, 'store'])->name('user-detail.store');
});


Route::get('/notifications', [NotificationController::class, 'getNotifications'])->name('notifications.get');

// Route::get('/notifications/mark-as-read/{id}', [NotificationController::class, 'markAsRead'])->name('notifications.markAsRead');
// Route::get('/notifications/mark-all-as-read', [NotificationController::class, 'markAllAsRead'])->name('notifications.markAllAsRead');

Route::post('/contact', [ContactController::class, 'store'])
    ->name('contact.store')
    ->middleware(['App\Http\Middleware\CorsMiddleware']);
Route::prefix('admin')->middleware(['auth', 'admin'])->group(function () {
    Route::get('/contacts', 'App\Http\Controllers\Admin\ContactController@index')->name('admin.contacts.index');
    Route::get('/contacts/{id}', 'App\Http\Controllers\Admin\ContactController@show')->name('admin.contacts.show');
});

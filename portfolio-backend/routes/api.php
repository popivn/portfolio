<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\UserDetailController;
use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken;

Route::prefix('api')->withoutMiddleware([VerifyCsrfToken::class])->group(function () {
    Route::get('projects', [ProjectController::class, 'getAllProject']);
    Route::get('user-detail', [UserDetailController::class, 'getFirstUserDetail']);
});

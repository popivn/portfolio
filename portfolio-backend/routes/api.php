<?php

use Illuminate\Support\Facades\Route;

use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\UserDetailController;

Route::prefix('api')->group(function () {
    Route::get('projects', [ProjectController::class, 'getAllProject']);
    Route::get('user-detail', [UserDetailController::class, 'getFirstUserDetail']);
});

<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserDetail;
use Illuminate\Http\JsonResponse;

class UserDetailController extends Controller
{
    public function getFirstUserDetail(): JsonResponse
    {
        $userDetail = UserDetail::where('user_id', 1)->first();

        if (!$userDetail) {
            return response()->json([
                'success' => false,
                'message' => 'User detail not found',
            ], 404);
        }

        // Trả về dữ liệu
        return response()->json([
            'success' => true,
            'data' => $userDetail,
        ], 200);
    }
}

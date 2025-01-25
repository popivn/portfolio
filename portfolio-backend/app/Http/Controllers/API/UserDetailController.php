<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\UserDetail;
use Illuminate\Http\JsonResponse;

class UserDetailController extends Controller
{
    public function getFirstUserDetail(): JsonResponse
    {
        // Lấy dòng đầu tiên của user_id = 1
        $userDetail = UserDetail::where('user_id', 1)->first();

        // Kiểm tra nếu không tìm thấy dữ liệu
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

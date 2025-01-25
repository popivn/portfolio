<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\API\ProjectController as ProjectAPIController;
use App\Models\Project;

class ProjectController extends Controller
{
    public function index(Request $request)
    {
        $orderAPI = new ProjectAPIController();
        $response = $orderAPI->getAllProject();

        return response()->json($response);
    }
}

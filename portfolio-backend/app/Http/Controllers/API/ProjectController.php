<?php

namespace App\Http\Controllers\API;

use App\Models\Project;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ProjectController extends Controller
{
    public function getAllProject()
    {
        $projects = Project::all();
        return response()->json($projects);
    }
}

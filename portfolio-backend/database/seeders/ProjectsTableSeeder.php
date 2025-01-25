<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ProjectsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('projects')->insert([
            [
                'name' => 'Project 1',
                'description' => 'Description for Project 1',
                'image_url' => 'https://example.com/image1.jpg',
                'url' => 'https://example.com/project1',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'name' => 'Project 2',
                'description' => 'Description for Project 2',
                'image_url' => 'https://example.com/image2.jpg',
                'url' => 'https://example.com/project2',
                'created_at' => now(),
                'updated_at' => now(),
            ],
            // Add more projects as needed
        ]);
    }
}

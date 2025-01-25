<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        if (!Schema::hasTable('user_details')) {
            Schema::create('user_details', function (Blueprint $table) {
                $table->id();
                $table->foreignId('user_id')->constrained('users')->onDelete('cascade');
                $table->string('nickname')->nullable();
                $table->integer('age')->nullable();
                $table->string('school')->nullable();
                $table->date('start_learning_at')->nullable();
                $table->date('end_learning_at')->nullable();
                $table->string('status')->nullable();
                $table->text('description')->nullable();
                $table->string('profile_image')->nullable();
                $table->string('portfolio_link')->nullable();
                $table->timestamps();
            });
        }
    }

    public function down(): void
    {
        if (Schema::hasTable('user_details')) {
            Schema::drop('user_details');
        }
    }
};

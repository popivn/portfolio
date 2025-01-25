<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UserDetail extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'nickname',
        'birthday',
        'school',
        'start_learning_at',
        'end_learning_at',
        'status',
        'description',
        'profile_image',
        'portfolio_link',
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}

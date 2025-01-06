<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Auth extends Model
{
use HasFactory;
    protected $table = 'auth';
    protected $fillable = ['name' , 'password', 'address' , 'phone' , 'image' , 'rank'];
}


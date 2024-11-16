<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Fetch extends Model
{
use HasFactory;

    protected $table = 'fetch'; // Use the custom table name

    protected $fillable = ['name'];

}

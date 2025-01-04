<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{

    protected $table = 'attendance';

    protected $fillable = [
        'user_name',
        'user_number',
        'rank',
        'date',
        'status'
    ];
}

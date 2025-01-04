<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
       protected $table = 'alerts';
    protected $fillable = [
        'user',
        'rank',
        'message',
        'table_number',
        'type',
        'status',
    ];
    protected $casts = [
        'type' => 'string',
        'status' => 'string',
    ];
}

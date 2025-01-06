<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Alert extends Model
{
       protected $table = 'alerts';
    protected $fillable = [
        'rank',
        'message',
        'table_number',
        'status',
    ];
    protected $casts = [

        'status' => 'string',
    ];
}

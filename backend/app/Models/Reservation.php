<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;


class Reservation extends Model
{
     protected $table = 'reservations';
    protected $fillable = [
        'name',
        'number',
        'address',
        'date',
        'time',
        'size',
        'message',
        'table_number',
    ];
}

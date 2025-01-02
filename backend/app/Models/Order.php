<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'orders';

    protected $fillable = [
        'user_number',
        'name',
        'quantity',
        'price',
        'desc',
        'waiting_time',
        'status',
        'table_number',
    ];

    protected $attributes = [
        'status' => 'PENDING',
    ];
}

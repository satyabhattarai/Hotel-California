<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class History extends Model
{
    use HasFactory;
    protected $table = 'history';

    protected $fillable = [
        'user_name',
        'table_number',
        'user_number',
        'payment_date',
        'total_amount',
        'file_path',
    ];
}

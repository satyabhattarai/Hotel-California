<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FetchController;

Route::post('/forms', [FormController::class, 'store']);
Route::get('/fetch', [FetchController::class, 'index']);
Route::get('/menu', [FetchController::class, 'fetch_menu']);

Route::get('/login', [FetchController::class, 'login']);
Route::post('/client/check_number', [FetchController::class, 'client_check_number']);
Route::post('/signup', [FormController::class, 'signup']);
Route::post('/client/register', [FormController::class, 'client_register']);

Route::post('/order', [FormController::class, 'order_item']);

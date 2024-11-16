<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FetchController;

Route::post('/forms', [FormController::class, 'store']);
Route::get('/fetch', [FetchController::class, 'index']);
Route::get('/login', [FetchController::class, 'login']);
Route::post('/signup', [FormController::class, 'signup']);

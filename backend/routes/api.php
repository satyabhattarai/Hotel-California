<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\FetchController;
use App\Http\Controllers\DeleteController;

Route::post('/forms', [FormController::class, 'store']);
Route::get('/fetch', [FetchController::class, 'index']);
Route::get('/menu', [FetchController::class, 'fetch_menu']);

Route::get('/login', [FetchController::class, 'login']);
Route::post('/client/check_number', [FetchController::class, 'client_check_number']);
Route::post('/signup', [FormController::class, 'signup']);
Route::post('/client/register', [FormController::class, 'client_register']);

Route::post('/client/order', [FormController::class, 'order_item']);
Route::get('/client/fetch_order', [FetchController::class, 'fetch_order']);
Route::get('/client/fetch_visits', [FetchController::class, 'fetch_client_visits']);
Route::get('/client/fetch_history', [FetchController::class, 'fetch_client_history']);
Route::post('/cleanalert', [FormController::class, 'create_clean_alert']);
Route::delete('/client/order/delete/{id}', [DeleteController::class, 'delete_order']);
Route::post('/client/history/upload', [FormController::class, 'client_history_upload']);
Route::get('/client/history/download/{id}', [FormController::class, 'download_client_history']);

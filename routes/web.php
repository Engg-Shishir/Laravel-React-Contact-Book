<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::post('/contact', [ContactController::class,'store']);
Route::get('/contact', [ContactController::class,'index']);
Route::get('/edit/{id}', [ContactController::class,'edit']);

Route::post('/update', [ContactController::class,'update']);

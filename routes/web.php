<?php

use App\Http\Controllers\HomeController;
use Ezegyfa\LaravelHelperMethods\Language\LanguageMethods;
use Illuminate\Support\Facades\Route;

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

Route::get('/', [HomeController::class, 'welcome']);
Route::get('/contact-us', [HomeController::class, 'contactUs']);
Route::post('/contact-us', [HomeController::class, 'storeContactMessage']);
Route::post('/contact-us/clients', [HomeController::class, 'storeClient']);

LanguageMethods::registerRoute();

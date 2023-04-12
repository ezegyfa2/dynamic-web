<?php

use App\Http\Controllers\HomeController;
use Ezegyfa\LaravelHelperMethods\Language\LanguageMethods;
use Illuminate\Support\Facades\Route;
use Ezegyfa\LaravelHelperMethods\ServerCommandMethods;

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

Route::middleware(['setLanguage'])->group(function () {
    LanguageMethods::createGetRouteWithLanguage('/', [HomeController::class, 'welcome']);
    LanguageMethods::createTranslatedGetRoutes('/request-offer', [HomeController::class, 'requestOffer']);
    LanguageMethods::createTranslatedGetRoutes('/thank-you', [HomeController::class, 'thankYou']);
    Route::post('/request-offer', [HomeController::class, 'storeOffer']);
    Route::post('/request-offer/clients', [HomeController::class, 'storeClient']);
});
ServerCommandMethods::registerServerCommandRoutes();

<?php

use App\Http\Controllers\HomeController;
use Ezegyfa\LaravelHelperMethods\Language\LanguageMethods;
use Ezegyfa\LaravelHelperMethods\ServerCommands\ServerCommandMethods;
use Ezegyfa\LaravelHelperMethods\ImageMethods;
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

Route::middleware('setLanguage')->group(function () {
    LanguageMethods::createTranslatedGetRoutes('/', [HomeController::class, 'welcome']);
    //LanguageMethods::createTranslatedGetRoutes('/request-offer', [HomeController::class, 'requestOffer']);
    //LanguageMethods::createTranslatedPostRoutes('/request-offer', [HomeController::class, 'storeOffer']);
    //LanguageMethods::createTranslatedPostRoutes('/request-offer/clients', [HomeController::class, 'storeClient']);
    LanguageMethods::createTranslatedPostRoutes('/contact', [HomeController::class, 'storeContactMessage']);
    LanguageMethods::createTranslatedGetRoutes('/thank-you', [HomeController::class, 'thankYou']);
    LanguageMethods::createTranslatedGetRoutes('/privacy-policy', [HomeController::class, 'privacy']);
});
//ServerCommandMethods::registerServerCommandRoutes();
ImageMethods::registerImageRoute();
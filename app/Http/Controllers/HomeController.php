<?php

namespace App\Http\Controllers;

use Ezegyfa\LaravelHelperMethods\Database\FormGenerating\DatabaseInfos;
use Ezegyfa\LaravelHelperMethods\DynamicTemplateMethods;
use Ezegyfa\LaravelHelperMethods\HttpMethods;
use Ezegyfa\LaravelHelperMethods\Database\HelperTableMethods;
use Ezegyfa\LaravelHelperMethods\Language\LanguageMethods;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;

class HomeController extends Controller
{
    public function welcome()
    {
        $templateParams = DynamicTemplateMethods::getTranslatedTemplateParamsFromFile(base_path('node_modules/dynamic-web-vue-components/src/WelcomeTemplate/welcome.js'), 'welcome');
        $contactTableInfos = DatabaseInfos::getTableInfos()['contact_messages'];
        $templateParams->contact_us->form_item_sections = $contactTableInfos->getFormInfos('welcome.contact_us');
        $templateParams->current_language = strtoupper(App::currentLocale());
        $templateParams->navbar->languages = array_map(function($language) {
            return (object)[
                'name' => strtoupper($language),
                'url' => '/language/' . $language
            ];
        }, LanguageMethods::getTranslatedLanguages());
        if (Session::has('success_message')) {
            $templateParams->success_messages = [ Session::get('success_message') ];
        }
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic-web-welcome-template', $templateParams);
    }

    public function storeContactMessage(Request $request) {
        return HttpMethods::getStoreRequest($request, 'contact_messages',  __('welcome.contact_success'), '/', '/#contact_us');
    }
}

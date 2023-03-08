<?php

namespace App\Http\Controllers;

use Ezegyfa\LaravelHelperMethods\Database\FormGenerating\DatabaseInfos;
use Ezegyfa\LaravelHelperMethods\DynamicTemplateMethods;
use Ezegyfa\LaravelHelperMethods\HttpMethods;
use Ezegyfa\LaravelHelperMethods\Language\LanguageMethods;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use stdClass;

class HomeController extends Controller
{
    public function welcome() {
        $templatePath = base_path('node_modules/dynamic-web-vue-components/src/Templates/Compiled/welcome.json');
        $templateParams = $this->getTemplateLayoutParams($templatePath, '');
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_welcome', $templateParams);
    }

    public function contactUs() {
        $templatePath = base_path('node_modules/dynamic-web-vue-components/src/Templates/Compiled/contactUs.json');
        $templateParams = $this->getTemplateLayoutParams($templatePath, '');
        $clientTableInfos = DatabaseInfos::getTableInfos()['clients'];
        $orderTableInfos = DatabaseInfos::getTableInfos()['orders'];
        $templateParams->form_item_sections = [
            $clientTableInfos->getFormInfos('contactUs.form'),
            $orderTableInfos->getFormInfos('contactUs.form'),
        ];
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_contact_us', $templateParams);
    }

    public function storeContactMessage(Request $request) {
        return HttpMethods::getStoreRequest($request, 'contact_messages',  __('welcome.contact_success'), '/', '/#contact_us');
    }

    public function getTemplateLayoutParams(string $templatePath, string $paramPrefix) {
        $templateParams = DynamicTemplateMethods::getTranslatedTemplateParamsFromFile($templatePath, $paramPrefix);
        //$templateParams = new stdClass;
        $templateParams->current_language = strtoupper(App::currentLocale());
        if (!isset($templateParams->navbar)) {
            $templateParams->navbar = new stdClass;
        }
        $templateParams->navbar->languages = array_map(function($language) {
            return (object)[
                'name' => strtoupper($language),
                'url' => '/language/' . $language
            ];
        }, LanguageMethods::getTranslatedLanguages());
        if (Session::has('success_message')) {
            $templateParams->success_messages = [ Session::get('success_message') ];
        }
        return $templateParams;
    }
}

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
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_welcome', $templateParams, 'app');
    }

    public function contactUs() {
        $templatePath = base_path('node_modules/dynamic-web-vue-components/src/Templates/Compiled/contactUs.json');
        $templateParams = $this->getTemplateLayoutParams($templatePath, '');
        $clientTableInfos = DatabaseInfos::getTableInfos()['clients'];
        $orderFormInfos = [
            $this->getCheckboxFormInfos('has_product_categories'),
            $this->getCheckboxFormInfos('has_product_filters'),
            $this->getCheckboxFormInfos('has_product_ratings'),
            $this->getCheckboxFormInfos('has_product_comments'),
            $this->getCheckboxFormInfos('has_favorite_products'),
            $this->getCheckboxFormInfos('has_login'),
            $this->getCheckboxFormInfos('has_admin'),
            $this->getCheckboxFormInfos('has_buy_notifications'),
            $this->getCheckboxFormInfos('has_monthly_reports'),
        ];
        $templateParams->form_item_sections = [
            $clientTableInfos->getFormInfos('contactUs.form'),
            $orderFormInfos,
        ];
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_contact_us', $templateParams, 'app');
    }

    protected function getCheckboxFormInfos($name) {
        return (object) [
            'type' => 'checkbox-input',
            'data' => (object) [
                'name' => $name,
                'label' => __('contactUs.form.' . $name . '.label')
            ]
        ];
    }

    public function storeContactMessage(Request $request) {
        return HttpMethods::getStoreRequest($request, 'orders', 'contactUs.success_message', '/');
    }

    public function storeClient(Request $request) {
        return HttpMethods::getApiStoreRequest($request, 'clients', 'contactUs.success_message', '/');
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
            $templateParams->success_messages = [ __(Session::get('success_message')) ];
        }
        else if (request()->get('success_message')) {
            $templateParams->success_messages = [ __(request()->get('success_message')) ];
        }
        return $templateParams;
    }
}

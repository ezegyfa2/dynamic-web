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
        //$templateParams = [];
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_welcome', $templateParams, 'app');
    }

    public function contactUs() {
        $templatePath = base_path('node_modules/dynamic-web-vue-components/src/Templates/Compiled/contactUs.json');
        $templateParams = $this->getTemplateLayoutParams($templatePath, '');
        $clientTableInfos = DatabaseInfos::getTableInfos()['clients'];
        $orderFormInfos = [
            $this->getCheckboxFormInfos('has_product_categories', 200),
            $this->getCheckboxFormInfos('has_product_filters', 200),
            $this->getCheckboxFormInfos('has_product_ratings', 200),
            $this->getCheckboxFormInfos('has_product_comments', 200),
            $this->getCheckboxFormInfos('has_favorite_products', 200),
            $this->getCheckboxFormInfos('has_login', 200),
            $this->getCheckboxFormInfos('has_admin', 200),
            $this->getCheckboxFormInfos('has_buy_notifications', 200),
            $this->getCheckboxFormInfos('has_monthly_reports', 200),
        ];
        $templateParams->form_item_sections = [
            $clientTableInfos->getFormInfos('contactUs.form'),
            $orderFormInfos,
        ];
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_contact_us', $templateParams, 'app');
    }

    protected function getCheckboxFormInfos($name, $price) {
        return (object) [
            'type' => 'checkbox-input-with-text-content',
            'data' => (object) [
                'name' => $name,
                'title_label' => __('contactUs.form.' . $name . '.title_label'),
                'description_label' => __('contactUs.form.' . $name . '.description_label'),
                'price' => $price
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

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
        LanguageMethods::checkLanguage();
        $templatePath = base_path('node_modules/dynamic-web-vue-components/src/Templates/Compiled/contactUs.json');
        $templateParams = $this->getTemplateLayoutParams($templatePath, '');
        $templateParams->form_item_sections = $this->getOrderFormInfos();
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_contact_us', $templateParams, 'app');
    }

    protected function getOrderFormInfos() {
        $clientTableInfos = DatabaseInfos::getTableInfos()['clients'];
        $orderFormInfos = [$clientTableInfos->getFormInfos('contactUs.form'), []];
        $formInfos = [
            $this->getCheckboxFormInfos('has_product_categories', 300),
            $this->getCheckboxFormInfos('has_excel_product_import', 200),
            $this->getCheckboxFormInfos('has_related_products', 300),
            $this->getCheckboxFormInfos('has_product_order_by', 300),
            $this->getCheckboxFormInfos('has_product_filters', 500),
            $this->getCheckboxFormInfos('has_product_ratings', 200),
            $this->getCheckboxFormInfos('has_product_comments', 200),
            $this->getCheckboxFormInfos('has_favorite_products', 200),
            $this->getCheckboxFormInfos('has_featured_products', 300),
            $this->getCheckboxFormInfos('has_cart', 500),
            $this->getCheckboxFormInfos('has_coupon', 300),
            $this->getCheckboxFormInfos('has_delivery_method', 100),
            $this->getCheckboxFormInfos('has_login', 200),
            $this->getCheckboxFormInfos('has_facebook_login', 300),
            $this->getCheckboxFormInfos('has_product_admin', 500),
            $this->getCheckboxFormInfos('has_buyer_admin', 500),
            $this->getCheckboxFormInfos('has_admin_log', 200),
            $this->getCheckboxFormInfos('has_buy_statistics', 300),
            $this->getCheckboxFormInfos('has_buy_notifications', 200),
            $this->getCheckboxFormInfos('has_news_blog', 400),
        ];
        $formInfoCount = 0;
        $currentPageNumber = 1;
        foreach ($formInfos as $formInfo) {
            if ($formInfoCount < 5) {
                array_push($orderFormInfos[$currentPageNumber], $formInfo);
                ++$formInfoCount;
            }
            else {
                ++$currentPageNumber;
                $formInfoCount = 0;
                array_push($orderFormInfos, []);
            }
        }
        return $orderFormInfos;
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

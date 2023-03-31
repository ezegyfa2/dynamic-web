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
        $clientFormInfos = $clientTableInfos->getFormInfos('contactUs.form');
        $orderTypeFormInfo = (object) [
            'type' => 'radio',
            'data' => (object) [
                'name' => 'order_type',
                'title' => __('contactUs.form.order_type.title'),
                'required' => true,
                'options' => [
                    (object) [
                        'label' => __('contactUs.form.order_type.options.presentation_website'),
                        'value' => 0,
                    ],
                    (object) [
                        'label' => __('contactUs.form.order_type.options.webshop'),
                        'value' => 1,
                    ],
                ],
            ],
        ];
        $clientFormInfos[] = $orderTypeFormInfo;
        $templateParams->form_item_sections = [ $clientFormInfos, ...$this->getWebshopFormInfos() ];
        $templateParams->client_form_item_sections = $clientFormInfos;
        $templateParams->presentation_website_form_item_sections = $this->getPresentationWebsiteFormInfos();
        $templateParams->webshop_form_item_sections = $this->getWebshopFormInfos();
        return DynamicTemplateMethods::getTemplateDynamicPage('dynamic_web_contact_us', $templateParams, 'app');
    }

    protected function getPresentationWebsiteFormInfos() {
        $presentationWebsiteFormInfos = [
            $this->getCheckboxFormInfos('has_services_page', 300),
            $this->getCheckboxFormInfos('has_contact_us_page', 200),
            $this->getCheckboxFormInfos('has_catalog_page', 300),
        ];
        return $this->getMultiPageFormInfos($presentationWebsiteFormInfos);
    }

    protected function getWebshopFormInfos() {
        $webshopFormInfos = [
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
        return $this->getMultiPageFormInfos($webshopFormInfos);
    }

    protected function getMultiPageFormInfos($formInfos) {
        $multiPageFormInfos = [[]];
        $formInfoCount = 0;
        $currentPageNumber = 0;
        foreach ($formInfos as $formInfo) {
            if ($formInfoCount == 5) {
                ++$currentPageNumber;
                $formInfoCount = 0;
                array_push($multiPageFormInfos, []);
            }
            array_push($multiPageFormInfos[$currentPageNumber], $formInfo);
            ++$formInfoCount;
        }
        return $multiPageFormInfos;
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
        switch ($request->get('order_type')) {
            case 0:
                return HttpMethods::getStoreRequest($request, 'presentation_website_orders', 'contactUs.success_message', '/');
            case 1:
                return HttpMethods::getStoreRequest($request, 'webshop_orders', 'contactUs.success_message', '/');
            default:
                throw new \Exception('Invalid order type');
        }
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
        $templateParams->navbar->languages = LanguageMethods::getLanguageUrlObjects();
        if (Session::has('success_message')) {
            $templateParams->success_messages = [ __(Session::get('success_message')) ];
        }
        else if (request()->get('success_message')) {
            $templateParams->success_messages = [ __(request()->get('success_message')) ];
        }
        return $templateParams;
    }
}

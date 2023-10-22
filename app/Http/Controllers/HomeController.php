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
        $templateParams = DynamicTemplateMethods::getTemplateLayoutParams();
        $templateParams->contact_form = new \stdClass;
        $templateParams->contact_form->form_item_sections = json_decode(file_get_contents(base_path('app/Templates/contactUsTableInfos.json')));
        foreach ($templateParams->contact_form->form_item_sections as $formItemSection) {
            $formItemSection->data->label = __($formItemSection->data->label);
            $formItemSection->data->placeholder = __($formItemSection->data->placeholder);
        }
        return DynamicTemplateMethods::getTranslatedTemplateDynamicPage(
            'dynamic_web_welcome', 
            'welcome', 
            $templateParams,
            [ 
                'welcome',
            ],
            [ 
                'welcome',
            ]
        );
    }

    public function requestOffer() {
        $templateParams = $this->getTemplateLayoutParams();
        $clientTableInfos = DatabaseInfos::getTableInfos()['clients'];
        $clientFormInfos = $clientTableInfos->getFormInfos('requestOffer.form');
        $orderTypeFormInfo = (object) [
            'type' => 'radio',
            'data' => (object) [
                'name' => 'order_type',
                'title' => __('requestOffer.form.order_type.title'),
                'required' => true,
                'options' => [
                    (object) [
                        'label' => __('requestOffer.form.order_type.options.presentation_website'),
                        'value' => 0,
                    ],
                    (object) [
                        'label' => __('requestOffer.form.order_type.options.webshop'),
                        'value' => 1,
                    ],
                ],
            ],
        ];
        $clientFormInfos[] = $orderTypeFormInfo;
        $templateParams->form_item_sections = [];
        $templateParams->client_form_item_sections = $clientFormInfos;
        $templateParams->presentation_website_form_item_sections = $this->getPresentationWebsiteFormInfos();
        $templateParams->webshop_form_item_sections = $this->getWebshopFormInfos();
        $templateParams->form_url = '/' . __('routes.request-offer');
        return DynamicTemplateMethods::getTranslatedTemplateDynamicPage(
            'dynamic_web_request_offer', 
            'requestOffer',
            $templateParams, 
            [ 
                'requestOffer',
            ],
            [ 
                'requestOffer',
            ]
        );
    }

    protected function getPresentationWebsiteFormInfos() {
        $presentationWebsiteFormInfos = [
            $this->getCheckboxFormInfos('has_home_page', 2500, true, true),
            $this->getCheckboxFormInfos('has_contact_us_page', 300),
            $this->getCheckboxFormInfos('has_catalog_page', 500),
            $this->getCheckboxFormInfos('has_login', 200),
            $this->getCheckboxFormInfos('has_booking_engine', 500),
            $this->getCheckboxFormInfos('has_admin', 500),
        ];
        return $this->getMultiPageFormInfos($presentationWebsiteFormInfos);
    }

    protected function getWebshopFormInfos() {
        $webshopFormInfos = [
            $this->getCheckboxFormInfos('has_home_page', 3200, true, true),
            $this->getCheckboxFormInfos('has_products_page', 400, true, true),
            $this->getCheckboxFormInfos('has_cart', 400, true, true),
            $this->getCheckboxFormInfos('has_login', 200, true, true),
            $this->getCheckboxFormInfos('has_card_payment', 300, true, true),
            $this->getCheckboxFormInfos('has_smart_bill', 500),
            $this->getCheckboxFormInfos('has_courier_integration', 500),
            $this->getCheckboxFormInfos('has_facebook_login', 200),
            $this->getCheckboxFormInfos('has_contact_us_page', 300),
            $this->getCheckboxFormInfos('has_excel_product_import', 100),
            $this->getCheckboxFormInfos('has_related_products', 300),
            $this->getCheckboxFormInfos('has_product_filters', 500),
            $this->getCheckboxFormInfos('has_product_ratings', 400),
            $this->getCheckboxFormInfos('has_favorite_products', 200),
            $this->getCheckboxFormInfos('has_featured_products', 300),
            $this->getCheckboxFormInfos('has_coupon', 500),
            $this->getCheckboxFormInfos('has_admin', 400),
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

    protected function getCheckboxFormInfos($name, $price, $locked = false, $value = false) {
        return (object) [
            'type' => $locked ? 'locked-checkbox-input-with-text-content' : 'checkbox-input-with-text-content',
            'data' => (object) [
                'name' => $name,
                'title_label' => __('requestOffer.form.' . $name . '.title_label'),
                'description_label' => __('requestOffer.form.' . $name . '.description_label'),
                'price' => $price,
                'value' => $value,
            ]
        ];
    }

    public function storeOffer(Request $request) {
        switch ($request->get('order_type')) {
            case 0:
                return HttpMethods::getStoreRequest($request, 'presentation_website_orders', 'requestOffer.success_message', '/' . __('routes.thank-you'));
            case 1:
                return HttpMethods::getStoreRequest($request, 'webshop_orders', 'requestOffer.success_message', '/' . __('routes.thank-you'));
            default:
                throw new \Exception('Invalid order type');
        }
    }

    public function storeClient(Request $request) {
        return HttpMethods::getApiStoreRequest($request, 'clients', 'requestOffer.success_message', '/');
    }

    public function thankYou(Request $request) {
        return DynamicTemplateMethods::getTranslatedTemplateDynamicPage(
            'dynamic_web_thank_you', 
            'thankYou',
            $this->getTemplateLayoutParams(), 
            [ 
                'thankYou',
            ],
            [ 
                'thankYou',
            ]
        );
    }

    public function getTemplateLayoutParams() {
        $templateParams = DynamicTemplateMethods::getTemplateLayoutParams();
        $templateParams->request_offer_url = '/' . __('routes.request-offer');
        return $templateParams;
    }

    public function privacy() {
        return view('privacy');
    }
}

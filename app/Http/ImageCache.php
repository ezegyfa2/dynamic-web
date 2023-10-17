<?php

namespace App\Http;

class ImageCache
{
    public static function getImageMap() {
        return [
            "articles" => [
                "blondeWoman" => [
                    "215" => true,
                    "615" => true
                ],
                "NaN" => true,
                "easyToModify" => [
                    "597" => true,
                    "818" => true
                ]
            ],
            "latestworks" => [
                "3175709" => true,
                "4141109" => true,
                "4264527" => true,
                "5471806" => true,
                "6207747" => true,
                "7534274" => true,
                "7554326" => true,
                "8285773" => true
            ],
            "roadmap" => [
                "NaN" => true
            ],
            "team" => [
                "NaN" => true
            ],
            "vendor" => [
                "agency-landing-page-vue-components" => [
                    "src" => [
                        "ContactForm" => [
                            "NaN" => true
                        ],
                        "Header" => [
                            "NaN" => true
                        ]
                    ]
                ],
                "dynamic-web-vue-components" => [
                    "src" => [
                        "ContactForm" => [
                            "Form" => [
                                "NaN" => true
                            ]
                        ],
                        "Header" => [
                            "NaN" => true
                        ],
                        "RequestOffer" => [
                            "Form" => [
                                "NaN" => true
                            ]
                        ],
                        "RequestOfferForm" => [
                            "Form" => [
                                "NaN" => true
                            ]
                        ],
                        "Welcome" => [
                            "ContactForm" => [
                                "Form" => [
                                    "NaN" => true
                                ]
                            ],
                            "Header" => [
                                "Header" => [
                                    "NaN" => true
                                ]
                            ]
                        ]
                    ]
                ],
                "mdbvue" => [
                    "lib" => [
                        "overlays" => [],
                        "svg" => []
                    ]
                ]
            ]
        ];
    }
}
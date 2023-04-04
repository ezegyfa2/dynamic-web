<?php

return [
    'form' => [
        'name' => [
            'placeholder' => 'Név',
        ],
        'email' => [
            'placeholder' => 'Email',
        ],
        'phone' => [
            'placeholder' => 'Telefonszám',
        ],
        'city' => [
            'placeholder' => 'Város',
        ],
        'order_type' => [
            'title' => 'Válassza ki a weboldal típusát',
            'options' => [
                'presentation_website' => 'Bemutató oldal',
                'webshop' => 'Webshop',
            ],
        ],

        'has_home_page' => [
            'title_label' => 'Home oldal',
            'description_label' => 'A weboldal nyitó oldala. Tartalmazza a termék/szolgáltatás és a vállalat leírását továbbá a felhasználók erről az oldalról juthatnak el a weboldal más aloldalaira.',
        ],
        'has_products_page' => [
            'title_label' => 'Termékek oldal',
            'description_label' => 'A termékeket felsoroló oldal',
        ],
        'has_cart' => [
            'title_label' => 'Kosár',
            'description_label' => 'A felhasználók a vásárlásaikat egy kosárba helyezik, majd a kiválasztott termékeket egyetlen megrendeléssel megvásárolhatják',
        ],
        'has_contact_us_page' => [
            'title_label' => 'Kapcsolat oldal',
            'description_label' => 'A felhasználók egy form kitöltésével üzenhetnek az oldal tulajdonosának. A formban számos részlet megadható (személyes adatok, az üzenet témája stb.)',
        ],

        'has_excel_product_import' => [
            'title_label' => 'Terméklista exportálása/Importálása excelből',
            'description_label' => 'A weboldal tulajdonosa excel fájlon keresztül tölthet fel adatokat a termékekről',
        ],
        'has_related_products' => [
            'title_label' => 'Kapcsolódó termékek',
            'description_label' => 'A termék weboldalán megtekinthetőek a kapcsolodó termékek',
        ],
        'has_product_filters' => [
            'title_label' => 'Termékszűrők',
            'description_label' => 'A felhasználók kulcsszó, ár vagy egyéb termékjellemzők alapján kereshetnek bizonyos termékeket. A felhasználók a terméklistát termékjellemzők (ár, dátum stb.) szerint rendezhetik',
        ],
        'has_product_ratings' => [
            'title_label' => 'Termékértékelések',
            'description_label' => 'A felhasználók egytől ötig értékelhetik a termékeket. Az átlagos értékelés megjelenik a termékoldalon',
        ],
        'has_product_comments' => [
            'title_label' => 'Termék megjegyzések',
            'description_label' => 'A felhasználóknak lehetőségük van véleményeket írni a termékekről, amelyek megjelennek a termékoldalon',
        ],
        'has_favorite_products' => [
            'title_label' => 'Kedvenc termékek',
            'description_label' => 'A felhasználóknak lehetőségük van arra, hogy egy gomb segítségével bármely terméket felvegyenek a kedvenceik közé',
        ],
        'has_featured_products' => [
            'title_label' => 'Kiemelt termékek',
            'description_label' => 'A weboldal tulajdonosa kiemelhet bizonyos termékeket. A kiemelt termékek a terméklistában előrébb szerepelnek, mint a többi termék',
        ],
        'has_coupon' => [
            'title_label' => 'Kuponok',
            'description_label' => 'A webhely tulajdonosa árusíthat vásárlói kuponokat, amelyeket a vásárlók vásárlásaik során felhasználhatnak',
        ],
        'has_delivery_method' => [
            'title_label' => 'Szállítási mód kiválasztása',
            'description_label' => 'A felhasználók kiválaszthatják a szállítási módot',
        ],
        'has_login' => [
            'title_label' => 'Bejelentkezés',
            'description_label' => 'A felhasználóknak lehetőségük van regisztrálni az oldalon, majd be- és kijelentkezni',
        ],
        'has_facebook_login' => [
            'title_label' => 'Facebook bejelentkezés',
            'description_label' => 'A felhasználók bejelentkezhetnek facebook fiókkal',
        ],
        'has_product_admin' => [
            'title_label' => 'Termék adminisztrációs panel',
            'description_label' => 'Egy felhasználói felület, amely lehetővé teszi az oldal tulajdonosának a termékek listázását és szerkesztését',
        ],
        'has_buyer_admin' => [
            'title_label' => 'Vásárlói adminisztrációs panel',
            'description_label' => 'Egy felhasználói felület, amely lehetővé teszi az oldal tulajdonosának, hogy a vásárlói adatokat listázza',
        ],
        'has_admin_log' => [
            'title_label' => 'Admin feljegyzések',
            'description_label' => 'Feljegyzések amik tartalmazzák az adminisztrációs felületen végrehajtott műveleteket',
        ],
        'has_buy_statistics' => [
            'title_label' => 'Vásárlói statisztikák',
            'description_label' => 'A vásárlások fő statisztikai mutatói',
        ],
        'has_buy_notifications' => [
            'title_label' => 'Értesítés vásárlás után',
            'description_label' => 'A webhely tulajdonosa értesítést kap minden vásárlás után',
        ],
        'has_news_blog' => [
            'title_label' => 'Hírek/Blog',
            'description_label' => 'Külön oldal a hírek/blog számára',
        ],
        
        'has_catalog_page' => [
            'title_label' => 'Katalógus oldal',
            'description_label' => 'A termékeket felsoroló oldal',
        ],
        'has_booking_engine' => [
            'title_label' => 'Foglalási funkció',
            'description_label' => 'A felhasználók időpontot foglalhatnak a weboldalon keresztűl',
        ],
        'has_admin' => [
            'title_label' => 'Admin panel',
            'description_label' => 'Egy felhasználói felület, amely lehetővé teszi a webhely tulajdonosának a webhely adatbázisának kilistázását és szerkesztését.',
        ],
    ],
    'next_button_title' => 'KÖVETKEZŐ',
    'back_button_title' => 'VISSZA',
    'button_title' => 'KÜLDÉS',
    'title' => 'KAPCSOLAT',
    'subtitle' => 'Küldje el megrendelését és hamarosan felvesszük Önnel a kapcsolatot',
    'success_message' => 'A megrendelését sikeresen elmentettük, hamarosan válaszolunk',
    'sum_price' => [
        'label' => 'Ár',
    ],
];

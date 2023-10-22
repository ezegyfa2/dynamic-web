<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" style="background-color: white;">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="description" content="{{ Ezegyfa\LaravelHelperMethods\Language\LanguageMethods::getMetaDescription() }}">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <meta name="ip" content="{{ Request::ip() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    @if (isset($scriptPaths))
        <!-- Scripts -->
        @foreach ($scriptPaths as $scriptPath)
            <script src="{{ asset('js/' . $scriptPath . '.js') }}" defer></script>
        @endforeach
    @endif

    @if (isset($scriptPaths))
        <!-- Styles -->
        @foreach ($stylePaths as $stylePath)
            <link
                href="{{ asset('css/' . $stylePath . '.css') }}"
                as="preload" 
                rel="stylesheet" 
                onload="this.onload=null;this.rel='stylesheet'"
            />
        @endforeach
    @endif

    @if (app()->environment('production'))
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11090865003"></script>
        <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'AW-11090865003');
        </script>
    @endif
</head>
<body>
    <div id="app">
        <main>
            @yield('content')
        </main>
    </div>

    @if (app()->environment('production'))
        <!-- Google Tag Manager (noscript) -->
        <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N4NBSVF"
        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <!-- End Google Tag Manager (noscript) -->
    @endif
</body>
</html>

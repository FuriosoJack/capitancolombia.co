<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CapitanColombiAPP 🇨🇴 </title>
        <link rel="icon" href="{{asset('img/favicon.ico')}}" type="image/x-icon" />

        <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    </head>
    <body class="antialiased">
        <div id="app">
            @yield("app")
        </div>
         <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>

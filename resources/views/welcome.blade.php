<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CapitanColombiAPP 🇨🇴 </title>
        <link rel="icon" href="{{asset('img/favicon.ico')}}" type="image/x-icon" />
<link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">

        <link rel="stylesheet" href="{{ mix('css/app.css') }}" />
    </head>
    <body class="antialiased">
        <div id="app">
            <en-construccion></en-construccion>
        </div>
         <script src="{{ mix('js/app.js') }}"></script>
    </body>
</html>

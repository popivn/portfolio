<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>{{ config('app.name', 'Laravel') }}</title>

        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css">
    </head>
    <body class="bg-light">
        <div class="min-vh-100 d-flex flex-column justify-content-center align-items-center">
            <div>
                <a href="/">
                    <x-application-logo class="text-secondary" style="width: 80px; height: 80px;" />
                </a>
            </div>

            <div class="w-100 mt-4 p-4 bg-white shadow-sm rounded" style="max-width: 400px;">
                {{ $slot }}
            </div>
        </div>

        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js"></script>
    </body>
</html>

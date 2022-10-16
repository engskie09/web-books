<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    @php
        $manifest = json_decode(file_get_contents(public_path('build/manifest.json')), true);
    @endphp
    <script type="module" src="/build/{{$manifest['resources/js/app.js']['file']}}"></script>
    <link rel="stylesheet" href="/build/{{$manifest['resources/js/app.js']['css'][0]}}">
</head>
<body>
    <div id="app"></div>
</body>
</html>
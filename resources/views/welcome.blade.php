<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet">
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
        <link href="/css/app.css" rel="stylesheet" >
    </head>
    <body>

        

        <div id="app" class="">

            @{{info}}

            <div class="shadow-lg border-t-8 border-blue-500">
                <my-navbar></my-navbar>
            </div>
    
            <div class="flex flex-row container" >
                <div class="side w-1/4 shadow shadow-lg mt-4 border-t-8 border-blue-500">
                    <side-bar><side-bar>
                </div>
                <div class="side w-3/4 shadow shadow-lg mt-4 ml-4 border-t-8 border-blue-500">
                    <router-view></router-view>
                </div>
            </div>

            

        </div>

        <script src="/js/app.js"></script>
    </body>
</html>

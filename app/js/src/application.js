var app =  angular.module('app', ['ui.router','ngGrid', 'pascalprecht.translate', 'app.controllers', 'app.services']);

app.config(function($stateProvider, $urlRouterProvider) {
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('login', {
            url: "/",
            templateUrl: "views/login.html",
            controller: 'LoginCtrl'
        }).state('main', {
            url: "/main",
            templateUrl: "views/main.html",
            controller: 'MainCtrl'
        })
}).config(['$httpProvider', function ($httpProvider) {
    // Autorisation des cookies pour les requétes CORS
    $httpProvider.defaults.withCredentials = true;
}]).config(['$translateProvider', function($translateProvider) {
    $translateProvider.preferredLanguage('fr');
    $translateProvider.useStaticFilesLoader({
        prefix: 'languages/',
        suffix: '.json'
    });
}]);
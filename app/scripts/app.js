'use strict';

var erikaburdonApp = angular.module('erikaburdonApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'ui.router',
]);



// Analytics
erikaburdonApp.config(function () {
    // GOOGLE STUFF HERE
});


// Root application
erikaburdonApp.config(function ($stateProvider) {
    $stateProvider
    .state('eb', {
        abstract: true,
        url: '/',
        template: '<div class="container"><div ui-view></div></div>'
    })
    // Todo: Move these out
    .state('eb.home', {
        url: '',
        controller: 'MainCtrl',
        templateUrl: 'views/main.html',
    })
    .state('eb.about', {
        url: 'about',
        controller: 'AboutCtrl',
        templateUrl: 'views/about.html',
    })
    .state('eb.contact', {
        url: 'contact',
        template: '<p>Email me anytime at <a href="mailto:erika@erikaburdon.ca">erika@erikaburdon.ca</a>!</p>',
    });
});


// Configure special pages
erikaburdonApp.config(function ($stateProvider, $urlRouterProvider) {

    // Handle garbage URLs
    $urlRouterProvider.otherwise(function ($injector, $location) {
        var $state = $injector.get('$state');
        var string = $location.path();

        // handle empty hashbang
        if (string === '') {
            $state.go('eb.home');
        } else {
            $state.go('eb.error-404');
        }

    });

    $stateProvider.state('eb.error-404', {
        url: '404',
        template: '<p>Bad Page!</p>'
    });

    // Todo: add nav to this page on a bad API response
    $stateProvider.state('eg.error-server', {
        url: 'oops',
        template: '<p>Oops, something went wrong!</p>'
    });
});



erikaburdonApp.run( function ($rootScope) {
    // Dump template errors
    $rootScope.$on('$stateChangeError', console.log.bind(console));
});

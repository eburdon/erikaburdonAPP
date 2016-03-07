'use strict';

/* global appSettings:true */

var erikaburdonApp = angular.module('erikaburdonApp', [
    'foundation',
    'ui.router',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'blog',
    'connect',
    'crystalBall',
    'home',
    'past-projects',
    'workspace'
]);

/*
 * Configure constants.
 *
 * Make deep copies of any objects to prevent
 * them from being changed outside of the app.
 */

erikaburdonApp.constant('settings', angular.copy(appSettings));

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
        template: '<div ui-view></div>'
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
        template: '<p>Oops! Page not found.</p><p><button ui-sref="eb.home">Return to home</button></p>'
    });

    // Todo: add nav to this page on a bad API response
    $stateProvider.state('eg.error-server', {
        url: 'oops',
        template: '<p>Oops, something went wrong!</p>'
    });
});

erikaburdonApp.run( function ($rootScope){
    // Dump template errors
    $rootScope.$on('$stateChangeError', console.log.bind(console));

    $rootScope.$on('$stateChangeError',
    function(event, toState, toParams, fromState, fromParams, error){
      console.log('$stateChangeError', error);
    });

    $rootScope.$on('$stateNotFound',
    function(event, unfoundState, unfoundStateParams, fromState, fromParams, error){
      console.log('$stateNotFound', unfoundState, unfoundStateParams, fromState, fromParams, error);
    });
});

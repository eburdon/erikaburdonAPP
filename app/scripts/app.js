'use strict';

/* global appSettings:true */

angular
    .module('erikaburdonApp', [
        'foundation',
        'ui.router',
        'ngAria',
        'ngCookies',
        'ngMessages',
        'ngResource',
        'ngSanitize',
        'ngTouch',
        'about',
        'career',
        'contact',
        'home',
        'projects',
        'facebook',
        'workspace'
    ])

    /*
     * Configure environment-generated constants.
     */
    .constant('settings', angular.copy(appSettings))

    /*
     * Root application
     */
    .config(function($stateProvider) {
        $stateProvider
        .state('eb', {
            abstract: true,
            url: '/',
            template: '<div ui-view></div>'
        });
    })

    /*
     * Configure special pages.
     */
    .config(function($stateProvider, $urlRouterProvider) {
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
            templateUrl: 'scripts/sections/404/404.html',
        });

        $stateProvider.state('eg.error-server', {
            url: 'oops',
            template: '<p>Oops, something went wrong!</p>'
        });
    })

    /*
     * Execute app.
     */
    .run(function($rootScope, $window, $location) {
        // Dump template errors
        $rootScope.$on('$stateChangeError', console.log.bind(console));

        // Dump state change errors
        $rootScope.$on('$stateChangeError',
        function(event, toState, toParams, fromState, fromParams, error){
          console.log('$stateChangeError', error);
        });

        $rootScope.$on('$stateNotFound',
        function(event, unfoundState, unfoundStateParams, fromState, fromParams, error){
          console.log('$stateNotFound', unfoundState, unfoundStateParams, fromState, fromParams, error);
        });

        $rootScope.$on('$stateChangeSuccess', function(event) {
            // if (!$window.ga) {
            //    console.log('Cannot find Google Analytics Object');
            // }

            // ga(function(tracker) {
            //   console.log(tracker.get('clientId'));
            // });

            ga('set', 'page', '/new-page.html');
            ga('send', 'pageview');

            // $window.ga('send', 'pageview', $location.path());
        });
    });

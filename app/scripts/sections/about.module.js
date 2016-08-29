'use strict';

angular
    .module('about', ['social.service'])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.about', {
                templateUrl: 'scripts/sections/about/about.html',
                url: 'about',
                controller: 'EbAboutController',
                controllerAs: 'aboutVM'
            });
    });

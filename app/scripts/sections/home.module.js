'use strict';

angular.module('home-parallax', ['helper.factory'])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.home', {
        url: '',
        templateUrl: 'scripts/sections/home/home.html',
        controller: 'EbHomeController'
    });
});

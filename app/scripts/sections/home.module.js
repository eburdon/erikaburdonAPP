'use strict';

angular.module('home', ['helper.factory'])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.home', {
        templateUrl: 'scripts/sections/home/home.html',
        url: '',
        controller: 'EbHomeController',
    });
});

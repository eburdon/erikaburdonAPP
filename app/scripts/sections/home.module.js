'use strict';
/* Todo: Modify templateUrl so it's referencing correct place */
angular.module('home', ['helper.factory'])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.home', {
        templateUrl: 'scripts/sections/home/home.html',
        url: '',
        controller: 'EbHomeController',
    });
});

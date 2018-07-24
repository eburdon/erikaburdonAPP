'use strict';

angular
    .module('home', ['helper.factory'])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.home', {
                templateUrl: 'scripts/sections/home/home_on_the_range.html',
                url: '',
                controller: 'EbHomeController',
                controllerAs: 'homeVm'
            });
});

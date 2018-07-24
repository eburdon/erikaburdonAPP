'use strict';

angular
    .module('wedding', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.wedding', {
                url: 'wedding',
                templateUrl: 'scripts/sections/wedding/entry.html',
                controller: 'EbEntryController',
                controllerAs: 'entryVM'
            });
    });

angular
    .module('rvsp', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.rvsp', {
                url: 'rvsp',
                templateUrl: 'scripts/sections/wedding/rvsp.html',
                controller: 'EbRvspController',
                controllerAs: 'rvspVM'
            });
    });

'use strict';

angular
    .module('career', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.career', {
                url: 'career',
                templateUrl: 'scripts/sections/career/career.html',
                controller: 'EbCareerController',
                controllerAs: 'careerVM'
            });
    });

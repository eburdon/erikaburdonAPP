'use strict';

angular.module('error-notBuilt', [])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.not-built', {
        url: 'missing',
        templateUrl: 'scripts/sections/error/not-built.html'
    });
});

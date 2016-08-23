'use strict';

angular
    .module('facebook', [
        'header',
        'ngFileUpload'
    ])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.facebook', {
                templateUrl: 'scripts/sections/facebook/facebook.html',
                url: 'facebook',
                controller: 'EbFacebookController',
                controllerAs: 'facebookVM'
            });
    });

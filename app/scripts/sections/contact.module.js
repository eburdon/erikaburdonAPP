'use strict';

angular
    .module('contact', ['social.service', 'twitter.service'])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.contact', {
                templateUrl: 'scripts/sections/contact/contact.html',
                url: 'contact',
                controller: 'EbContactController',
                controllerAs: 'contactVM'
            });
    });

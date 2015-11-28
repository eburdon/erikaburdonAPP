'use strict';
/* Todo: Modify templateUrl so it's referencing correct place */
angular.module('connect', [
    'social.service',
    'social-bubble.directives',
])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.connect', {
        url: 'connect',
        templateUrl: 'connect.html',
        controller: 'EbConnectController'
    });
});

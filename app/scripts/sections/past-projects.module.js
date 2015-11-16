'use strict';
/* Todo: Modify templateUrl so it's referencing correct place */
angular.module('past-projects', [])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.past-projects', {
        url: 'past-projects',
        templateUrl: 'past-projects.html',
        controller: 'EbPastProjectsController'
    });
});

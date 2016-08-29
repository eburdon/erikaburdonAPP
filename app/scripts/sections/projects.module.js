'use strict';

angular
    .module('projects', [])
    .config(function($stateProvider) {
        $stateProvider
            .state('eb.projects', {
                url: 'projects',
                templateUrl: 'scripts/sections/projects/projects.html',
                controller: 'EbProjectsController',
                controllerAs: 'projectsVM'
            });
});

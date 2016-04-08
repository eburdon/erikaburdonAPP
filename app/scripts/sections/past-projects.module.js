'use strict';

angular
	.module('past-projects', [])
	.config(function($stateProvider) {
	    $stateProvider
		    .state('eb.past-projects', {
		        url: 'past-projects',
		        templateUrl: 'scripts/sections/past-projects/past-projects.html',
		        controller: 'EbPastProjectsController',
		        controllerAs: 'pastVM'
		    });
});

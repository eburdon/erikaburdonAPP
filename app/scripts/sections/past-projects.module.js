'use strict';

angular
	.module('past-projects', [
		'header',
		'foundation.modal'
	])
	.config(function($stateProvider) {
	    $stateProvider
		    .state('eb.past-projects', {
		        url: 'past-projects',
		        templateUrl: 'scripts/sections/past-projects/past-projects.html',
		        controller: 'EbPastProjectsController',
		        controllerAs: 'pastVM'
		    });
});

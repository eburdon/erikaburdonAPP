'use strict';

angular
	.module('current-projects', [
		'header',
		'foundation.modal'
	])
	.config(function($stateProvider) {
	    $stateProvider
		    .state('eb.current-projects', {
		        url: 'current-projects',
		        templateUrl: 'scripts/sections/current-projects/current-projects.html',
		        controller: 'EbCurrentProjectsController',
		        controllerAs: 'currentVM'
		    });
});

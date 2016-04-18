'use strict';

angular
	.module('connect', [
    	'social.service',
    	'social-bubble.directives',
    	'header'
	])
	.config(function($stateProvider) {
	    $stateProvider
		    .state('eb.connect', {
		        url: 'connect',
		        templateUrl: 'scripts/sections/connect/connect.html',
		        controller: 'EbConnectController',
		        controllerAs: 'connectVm'
		    });
	});

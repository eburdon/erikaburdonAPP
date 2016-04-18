'use strict';

angular
	.module('home', [
		'helper.factory',
		'header',
	])
	.config(function($stateProvider) {
	    $stateProvider
		    .state('eb.home', {
		        templateUrl: 'scripts/sections/home/home.html',
		        url: '',
		        controller: 'EbHomeController',
		        controllerAs: 'homeVm'
		    });
});

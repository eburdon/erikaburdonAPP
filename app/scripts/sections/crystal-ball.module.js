'use strict';

angular
	.module('crystalBall', [
		'whatsInteresting',
		'header',
	])
	.config(function($stateProvider) {
	    $stateProvider
		    .state('eb.crystal-ball', {
		        templateUrl: 'scripts/sections/crystal-ball/crystal-ball.html',
		        url: 'crystal-ball',
		        controller: 'EbCrystalBallController',
		        controllerAs: 'crystalVM'
		    });
	});

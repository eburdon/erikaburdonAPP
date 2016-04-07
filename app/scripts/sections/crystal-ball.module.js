'use strict';

angular
	.module('crystalBall', ['whatsInteresting'])
	.config(function ($stateProvider) {
	    $stateProvider
		    .state('eb.crystalBall', {
		        templateUrl: 'scripts/sections/crystal-ball/crystal-ball.html',
		        url: 'crystal-ball',
		        controller: 'EbCrystalBallController',
		        controllerAs: 'crystalVM'
		    });
	});

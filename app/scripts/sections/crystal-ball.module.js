'use strict';

angular.module('crystalBall', [])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.crystalBall', {
        templateUrl: 'scripts/sections/crystal-ball/crystal-ball.html',
        url: 'crystal-ball',
        controller: 'crystalBallController',
    });
});

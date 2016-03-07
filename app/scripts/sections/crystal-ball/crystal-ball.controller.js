'use strict';

angular.module('crystalBall')
.controller('crystalBallController', function (
    $http,
    $log,
    $scope,
    settings ){

    $scope.showWhatsHappening = false;
    $scope.resultText = '(Click to reveal your future...)';

    $scope.ask = function() {
        var url =  settings.API_URL + '/crystalball'

        $http({method: 'GET', url: url}).then(function(result) {
            var data = result.data
            $scope.resultText = data.response;
        });
    };

    $scope.flipValue = function() {
        $scope.showWhatsHappening = !$scope.showWhatsHappening;
    }
});

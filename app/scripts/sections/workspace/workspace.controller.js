'use strict';

angular.module('workspace')
.controller('EbWorkspaceController', function (
    $http,
    $log,
    $scope,
    settings ) {

    $scope.resultText = 'None';

    $scope.whatwhat = function () {
        var url =  settings.API_URL + '/crystalball'
        $log.log('API url = ', url);

        $http({method: 'GET', url: url}).then(function(result) {
            var data = result.data
            $scope.resultText = data.response;
        });
    };
});

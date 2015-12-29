'use strict';

angular.module('workspace')
.controller('EbWorkspaceController', function (
    $http,
    $log,
    $scope,
    settings
    ) {

    $log.log('Loaded workspace controller');

    $scope.resultText = 'None';

    $scope.whatwhat = function () {
        var url = settings.API_URL + '/test'
        $log.log('API url = ', url);

        $http({method: 'GET', url: url}).then(function(result){
            console.log('data = ', result.data);
            $scope.resultText = result.data;
        });
    };

});

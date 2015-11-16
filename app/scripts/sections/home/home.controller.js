'use strict';

angular.module('home')
.controller('EbHomeController', function (
    $scope,
    helperFactory
    ) {

    $scope.githubImage = '';

    $scope.taglines = [
        'BIG IDEAS',
        'MUSIC',
        'SOFTWARE ENGINEERING',
        'CAMPING',
        'SCALABILITY',
        'DESIGN',
    ];

    var offset = 0;
    $scope.tagline = $scope.taglines[offset];

    $scope.exchangeTagline = function() {
        offset += 1;
        if (offset === $scope.taglines.length) {
            offset = 0;
        }

        $scope.tagline = $scope.taglines[offset];
    }

    var item = helperFactory.getGitHubInformation().then(function (githubInfo) {
        $scope.githubImage = githubInfo.avatar_url;
    });
});

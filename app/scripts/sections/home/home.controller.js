'use strict';

angular.module('home-parallax')
.controller('EbHomeController', function (
    $scope,
    helperFactory
    ) {

    $scope.githubImage = '';

    $scope.tagline = 'BIG IDEAS';
    var offset = 0;

    $scope.taglines = [
        'BIG IDEAS',
        'MUSIC',
        'SOFTWARE ENGINEERING',
        'CAMPING',
        'DESIGN',
    ];

    $scope.exchangeTagline = function() {
        offset += 1;
        if (offset === $scope.taglines.length) {
            offset = 0;
        }

        $scope.tagline = $scope.taglines[offset];
    }

    var item = helperFactory.getGitHubInformation().then(function (githubInfo) {
        console.log(githubInfo);
        $scope.githubImage = githubInfo.avatar_url;
    });
});

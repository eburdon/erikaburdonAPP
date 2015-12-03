'use strict';

angular.module('connect')
.controller('EbConnectController', function (
    $log,
    $scope,
    $q,
    socialService
    ) {

    document.getElementById('connect-page').scrollTop = 0

    $scope.gitHub = {
        network: 'GitHub',
        promise: socialService.createSocialObject('GitHub')
    };

    $scope.firstRow = {
        Email :         socialService.createSocialObject('Email'),
        LinkedIn :      socialService.createSocialObject('LinkedIn'),
        SoundCloud :    socialService.createSocialObject('SoundCloud'),
        GitHub :        $scope.gitHub,
    };

    // Todo: UpWork?
    $scope.secondRow = {
        Facebook :      socialService.createSocialObject('Facebook'),
        Twitter :       socialService.createSocialObject('Twitter'),
        GooglePlus :    socialService.createSocialObject('GooglePlus'),
    };
});

'use strict';

angular.module('connect')
.controller('EbConnectController', function (
    $log,
    $scope,
    socialService
    ) {

    // <link rel="stylesheet" href="bower_components/bootstrap/dist/css/bootstrap.min.css" />

    $scope.firstRow = {
        Email : socialService.createSocialObject('Email'),
        LinkedIn : socialService.createSocialObject('LinkedIn'),
        GitHub : socialService.createSocialObject('GitHub'),
        SoundCloud : socialService.createSocialObject('SoundCloud'),
    };

    // Todo: UpWork?
    $scope.secondRow = {
        Facebook : socialService.createSocialObject('Facebook'),
        Twitter : socialService.createSocialObject('Twitter'),
        GooglePlus : socialService.createSocialObject('GooglePlus'),
    };
});

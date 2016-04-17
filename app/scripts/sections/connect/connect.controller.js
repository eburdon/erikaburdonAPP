(function() {
    
    'use strict';

    angular.module('connect')
        .controller('EbConnectController', EbConnectController);

    EbConnectController.$inject = ['socialService']

    function EbConnectController(socialService) {

        document.getElementById('connect-page').scrollTop = 0

        var vm = this;

        vm.gitHub = {
            network: 'GitHub',
            promise: socialService.createSocialObject('GitHub')
        }

        vm.firstRow = {
            Email :         socialService.createSocialObject('Email'),
            LinkedIn :      socialService.createSocialObject('LinkedIn'),
            SoundCloud :    socialService.createSocialObject('SoundCloud'),
            GitHub :        vm.gitHub,
        }

        vm.secondRow = {
            Facebook :      socialService.createSocialObject('Facebook'),
            Twitter :       socialService.createSocialObject('Twitter'),
            GooglePlus :    socialService.createSocialObject('GooglePlus'),
        }

        vm.whatsInteresting = 'This page was built using Bootstrap Grid Framework. The GitHub bubble data compiled using two promises 1) HTTP request to get the data from public GitHub API, and 2) to manipulate the data the way it needed to be displayed.';
    }
})();

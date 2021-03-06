(function() {

    'use strict';

    angular
        .module('about')
        .controller('EbAboutController', EbAboutController);

        EbAboutController.$inject = ['helperFactory', 'connectConstants', 'socialService'];

        function EbAboutController(helperFactory, connectConstants, socialService) {

            var vm = this;

            vm.constants = connectConstants;
            vm.socialItems = {};

            $(document).ready(function(){
                $(this).scrollTop(0);
                document.title = "Erika Burdon | About";
            });

            activate();

            function activate() {
                angular.copy(vm.constants, vm.socialItems);

                socialService
                    .createSocialObject('Twitter')
                    .then(function(result) { angular.extend(vm.socialItems.TWITTER, result)});

                socialService
                    .getGitHubInformation()
                    .then(function(githubInfo) { vm.githubImage = githubInfo.avatar_url; });        

                socialService
                    .createSocialObject('GitHub')
                    .then(function(result) { angular.extend(vm.socialItems.GITHUB, result)});
            }
        }
})();

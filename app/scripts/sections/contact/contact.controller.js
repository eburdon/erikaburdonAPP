(function() {

    'use strict';

    angular
        .module('contact')
        .controller('EbContactController', EbContactController);

        EbContactController.$inject = ['helperFactory', 'connectConstants', 'webLinks', 'socialService'];

        function EbContactController(helperFactory, connectConstants, webLinks, socialService) {

            var vm = this;

            vm.constants = connectConstants;
            vm.weblinks = webLinks;
            vm.socialItems = {};

            $(document).ready(function(){
                $(this).scrollTop(0);
                document.title = "Erika Burdon | Contact";
            });

            vm.bloglinks = {};
            vm.youtubelinks = {};
            vm.stacklinks = {};

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
                
                angular.copy(vm.weblinks.BLOGS, vm.bloglinks);
                angular.copy(vm.weblinks.YOUTUBE, vm.youtubelinks);
                angular.copy(vm.weblinks.STACKEXCHANGE, vm.stacklinks);

                console.log(vm.youtubelinks);
            }
        };
})();

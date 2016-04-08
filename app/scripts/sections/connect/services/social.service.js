(function() {
    'use strict';

    angular
        .module('social.service', [
            'helper.factory'
        ])
        .factory('socialService', socialService);

        socialService.$inject = ['$q', 'helperFactory'];

        function socialService($q, helperFactory) {

            // Public API
            var service = {
                createSocialObject: createSocialObject,
            };

            return service;

            ////////

            function createSocialObject(network) {

                var builder,
                    networkBuilders = {
                    'Email' : buildEmailObject,
                    'LinkedIn': buildLinkedInObject,
                    'GitHub': triggerGitHubBuild,
                    'SoundCloud' : buildSoundCloudObject,
                    'Facebook' : buildFacebookObject,
                    'Twitter': buildTwitterObject,
                    'GooglePlus': buildGooglePlusObject,

                }

                builder = networkBuilders[network];

                if (!builder) { return undefined; }

                return builder(network);
            }

            function buildEmailObject(network) {
                return {
                    network: network,
                    email_link: 'erikaeburdon@gmail.com',
                }
            }

            function buildLinkedInObject(network) {
                return {
                    network: network,
                    username: 'eburdon',
                    page_link: 'https://www.linkedin.com/in/eburdon',
                    types: ['Employment | ', ' Volunteering | ', ' Education ']
                }
            }

            function triggerGitHubBuild() {
                var promise, dataPromise;

                promise = $q.defer();

                dataPromise = helperFactory
                    .getGitHubInformation()
                    .then(function(data) {
                        promise.resolve(buildGitHubObject(data));
                    });

                return promise;
            }

            function buildGitHubObject(data) {

                var myData = {
                    username: data.name,
                    network: 'GitHub',
                    page_link: data.html_url,
                    gists_url: data.gists_url,
                    repos: data.public_repos,
                    followers: data.followers,
                    following: data.following,
                    gists: data.public_gists,
                };

                myData.stats = [
                    ' ' + myData.repos +' Repositories |',
                    ' ' + myData.following +' Following |',
                    ' ' + myData.followers +' Followers ',
                ];

                return myData;
            }

            function buildSoundCloudObject(network) {
                return {
                    network: network,
                    username: 'Karmaqueenn',
                    page_link: 'https://soundcloud.com/karmaqueenn/sets',
                    stats: ['3 Playlists | ', ' 11 Followers | ', ' 57 Following ']
                }
            }

            function buildFacebookObject(network) {
                return {
                    network: network,
                    username: 'eburdon',
                    page_link: 'https://www.facebook.com/eeburdon'
                }
            }

            function buildTwitterObject(network) {
                return {
                    network: network,
                    username: '@OneEaredMusic',
                    page_link: 'https://twitter.com/OneEaredMusic',
                    stats: [' 23 Followers | ', ' 150 Following ']
                }
            }

            function buildGooglePlusObject(network) {
                return {
                    network: network,
                    username: 'erikaeburdon',
                    email_link: 'erikaeburdon@gmail.com',
                    page_link: 'https://plus.google.com/u/0/109863026229354313187/posts/p/pub',
                }
            }
        };
})();

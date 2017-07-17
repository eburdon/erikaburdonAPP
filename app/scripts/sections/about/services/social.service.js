(function() {
    'use strict';

    angular
        .module('social.service', [
            'helper.factory'
        ])
        .factory('socialService', socialService);

        socialService.$inject = ['$q', 'helperFactory', 'twitterService'];

        function socialService($q, helperFactory, twitterService) {

            var service = {
                getGitHubInformation: getGitHubInformation,
                createSocialObject: createSocialObject,
            };

            return service;

            ////////

            function createSocialObject(network) {
                var builder,
                    networkBuilders = {
                        'GitHub': triggerGitHubBuild,
                        'Twitter': triggerTwitterBuild
                    }

                builder = networkBuilders[network];

                if (!builder) { return undefined; }

                return builder();
            }

            /////// GITHUB

            function getGitHubInformation() {
                var GitHubUsername = 'eburdon';
                var deferred = $q.defer()

                var url = 'https://api.github.com/users/' + GitHubUsername;

                helperFactory.getRequest(url).then(function(data) {
                    deferred.resolve(data)
                });

                return deferred.promise;
            }

            function triggerGitHubBuild() {
                var promise, dataPromise;

                promise = $q.defer();

                dataPromise = getGitHubInformation()
                    .then(function(data) { 
                        var what = buildGitHubObject(data);
                        promise.resolve();
                        return what;
                    });

                return dataPromise;
            }

            function buildGitHubObject(data) {
                return {
                    USERNAME: data.name,
                    LINK: data.html_url,
                    STATS: [
                        data.public_repos + ' Repositories',
                        data.following + ' Following',
                        data.followers + ' Followers',
                    ],
                };
            }

            /////// TWITTER

            function triggerTwitterBuild() {
                console.log('The twitter feature is deprecated. Using defaults...');
                return new Promise(function(resolve, reject) {
                    return resolve();
                });
                // var promise, dataPromise;

                // promise = $q.defer();

                // dataPromise = twitterService
                // .getTwitterInformation()
                // .then(function(data) {
                //     var what = buildTwitterObject(data);
                //     promise.resolve();
                //     return what;
                // });

                // return dataPromise;
            }

            function buildTwitterObject(data) {
                return {
                    USERNAME: '@' + data.screen_name,
                    STATS: [
                        data.statuses_count + ' Tweets',
                        data.followers_count + ' Followers',
                        data.friends_count + ' Following'
                    ]
                }
            }
        };
})();

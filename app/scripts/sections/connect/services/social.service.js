(function() {
    'use strict';

    angular
        .module('social.service', [
            'helper.factory'
        ])
        .factory('socialService', socialService);

        socialService.$inject = ['$q', 'helperFactory'];

        function socialService($q, helperFactory) {

            var service = {
                createSocialObject: createSocialObject,
            };

            return service;

            ////////

            function createSocialObject(network) {

                var builder,
                    networkBuilders = {
                        'GitHub': triggerGitHubBuild
                    }

                builder = networkBuilders[network];

                if (!builder) { return undefined; }

                return builder();
            }

            function triggerGitHubBuild() {
                var promise, dataPromise;

                promise = $q.defer();

                dataPromise = helperFactory
                    .getGitHubInformation()
                    .then(function(data) { 
                        var what = buildGitHubObject(data);
                        promise.resolve();
                        return what;
                    });

                return dataPromise;
            }

            function buildGitHubObject(data) {

                var GITHUB = {
                    USERNAME: data.name,
                    LINK: data.html_url,
                    STATS: [
                        data.public_repos + ' Repositories',
                        data.following + ' Following',
                        data.followers + ' Followers',
                    ],
                };

                return GITHUB;
            }
        };
})();

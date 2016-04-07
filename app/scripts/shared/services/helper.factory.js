(function() {

    'use strict';

    angular
        .module('helper.factory', [])
        .factory('helperFactory', helperFactory);

        helperFactory.$inject = ['$q', '$http', 'settings'];

        function helperFactory($q, $http, settings) {
            var GitHubUsername = 'eburdon';

            var factory = {
                getGitHubInformation: getGitHubInformation,
                getRequest: getRequest
            };

            return factory;

            ////////

            function getGitHubInformation() {
                var url = 'https://api.github.com/users/' + GitHubUsername;

                return getRequest(url);
            }

            function getRequest(url) {
                var deferred = $q.defer();

                $http.get(url).success(function(data) {
                    deferred.resolve(data);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
})();

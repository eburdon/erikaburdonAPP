(function() {

    'use strict';

    angular
        .module('helper.factory', [])
        .factory('helperFactory', helperFactory);

        helperFactory.$inject = ['$q', '$http', 'settings'];

        function helperFactory($q, $http, settings) {
            var factory = {
                getRequest: getRequest,
                makeConfiguredRequest: makeConfiguredRequest
            };

            return factory;

            ////////

            function getRequest(url) {
                var deferred = $q.defer();

                $http.get(url).success(function(data) {
                    deferred.resolve(data);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }

            function makeConfiguredRequest(config) {
                var deferred = $q.defer();

                $http(config).success(function(data) {
                    deferred.resolve(data);
                }).error(function(error) {
                    deferred.reject(error);
                });
                return deferred.promise;
            }
        }
})();

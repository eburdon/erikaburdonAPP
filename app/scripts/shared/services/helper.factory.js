'use strict';

angular.module('helper.factory', [])
.factory('helperFactory', function($q, $http) {
    // Move to a constants-style folder?
    var GitHubUsername = 'eburdon';

    var factory = {};

    factory.getGitHubInformation = function () {
        var url = 'https://api.github.com/users/' + GitHubUsername;

        return factory.getRequest(url);
    }

    factory.getRequest = function(url) {
        var deferred = $q.defer();

        $http.get(url).success(function(data) {
            deferred.resolve(data);
        }).error(function(error) {
            deferred.reject(error);
        });
        return deferred.promise;
    };

    return factory;
});
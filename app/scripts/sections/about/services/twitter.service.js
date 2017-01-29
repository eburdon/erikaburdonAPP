(function() {
    'use strict';

    angular
        .module('twitter.service', [
            'helper.factory',
            'base64'
        ])
        .factory('twitterService', twitterService);

        twitterService.$inject = ['$q', '$base64', 'helperFactory', 'settings'];

        // TODO: MOVE TWITTER SERVICE TO BACKEND
        // Twitter API does not support CORS request (sent from browser)
        // The following only works on chromium-browser running with
        // --disable-web-security --user-data-dir
        function twitterService($q, $base64, helperFactory, settings) {

            var authorizationResult = false;

            return {
                getTwitterInformation: function() {
                    var bearer_token;
                    var deferred = $q.defer();
                    var encodedString = $base64.encode(settings.TWITTER_CONCATENTATED_AUTH_STRING);

                    var bearer_token_request = {
                        url: 'https://api.twitter.com/oauth2/token',
                        method: 'POST',
                        headers: {
                                'Authorization': 'Basic ' + encodedString,
                                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                            },
                        data: 'grant_type=client_credentials'
                    }

                    var user_data_request = {
                        url: 'https://api.twitter.com/1.1/users/show.json?screen_name=oneearedmusic&count=2',
                        method: 'GET'
                    }

                    helperFactory.makeConfiguredRequest(bearer_token_request).then(function(data){
                        bearer_token = data.access_token;

                        user_data_request.headers = {
                            'Authorization': 'Bearer ' + bearer_token,
                            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                        };

                        helperFactory.makeConfiguredRequest(user_data_request).then(function(data) {
                            deferred.resolve(data);
                        });
                    });

                    return deferred.promise;
                },
            }
        };
})();

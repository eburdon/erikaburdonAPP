(function() {

    'use strict';

    angular
        .module('social-bubble.directives', [])
        .directive('emailBubble', emailBubble)
        .directive('facebookBubble', facebookBubble)
        .directive('githubBubble', githubBubble)
        .directive('googleplusBubble', googleplusBubble)
        .directive('linkedinBubble', linkedinBubble)
        .directive('soundcloudBubble', soundcloudBubble)
        .directive('twitterBubble', twitterBubble);

        function emailBubble() {
            return {
                scope: {
                    info: '=',
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/email-bubble.html'
            };
        };

        function facebookBubble() {
            return {
                scope: {
                    info: '='
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/facebook-bubble.html'
            };
        };

        function githubBubble() {
            return {
                scope: {
                    info: '='
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/github-bubble.html',
                controller : ['$scope', function (scope) {

                    scope.info.promise.promise.then(function(data){
                        scope.info = data;
                    });
                }]
            };
        };

        function googleplusBubble() {
            return {
                scope: {
                    info: '='
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/googleplus-bubble.html'
            };
        };
    
        function linkedinBubble() {
            return {
                scope: {
                    info: '='
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/linkedin-bubble.html'
            };
        };

        function soundcloudBubble() {
            return {
                scope: {
                    info: '='
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/soundcloud-bubble.html'
            };
        };

        function twitterBubble() {
            return {
                scope: {
                    info: '='
                },
                priority: 2,
                restrict: 'E',
                replace: false,
                templateUrl: 'scripts/sections/connect/directives/twitter-bubble.html'
            };
        };
})();

'use strict';

angular.module('social-bubble.directives', [
])
.directive('emailBubble', function() {
    return {
        scope: {
            info: '=',
        },
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/email-bubble.html'
    };
})
.directive('facebookBubble', function() {
    return {
        scope: {
            info: '='
        },
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/facebook-bubble.html'
    };
})
.directive('githubBubble', function() {
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
})
.directive('googleplusBubble', function() {
    return {
        scope: {
            info: '='
        },
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/googleplus-bubble.html'
    };
})
.directive('linkedinBubble', function() {
    return {
        scope: {
            info: '='
        },
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/linkedin-bubble.html'
    };
})
.directive('soundcloudBubble', function() {
    return {
        scope: {
            info: '='
        },
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/soundcloud-bubble.html'
    };
})
.directive('twitterBubble', function() {
    return {
        scope: {
            info: '='
        },
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/twitter-bubble.html'
    };
});

'use strict';

angular.module('social-bubble.directives', [
])
.directive('emailBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/email-bubble.html'
    };
})
.directive('facebookBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/facebook-bubble.html'
    };
})
.directive('githubBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/github-bubble.html'
    };
})
.directive('googleplusBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/googleplus-bubble.html'
    };
})
.directive('linkedinBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/linkedin-bubble.html'
    };
})
.directive('soundcloudBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/soundcloud-bubble.html'
    };
})
.directive('twitterBubble', function() {
    return {
        priority: 2,
        restrict: 'E',
        replace: false,
        templateUrl: 'scripts/sections/connect/directives/twitter-bubble.html'
    };
});

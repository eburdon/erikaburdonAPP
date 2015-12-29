'use strict';

angular.module('blog', [])
.config(function ($stateProvider) {
    $stateProvider
    .state('eb.blog', {
        url: 'blog',
        templateUrl: 'scripts/sections/blog/blog.html',
        controller: 'EbBlogController'
    });
});

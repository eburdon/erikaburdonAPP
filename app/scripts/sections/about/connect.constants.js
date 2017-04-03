(function() {

    'use strict';

    // This file composes default values for the social services
    angular
        .module('about')
        .constant('connectConstants', {
            EMAIL: {
                NAME: 'EMAIL',
                ICON: 'fa-envelope-o',
                USERNAME: 'erikaeburdon@gmail.com',
                LINK_TEXT: 'SEND A MESSAGE',
                LINK: 'mailto:erikaeburdon@gmail.com',
            },
            LINKED_IN: {
                NAME: 'LINKEDIN',
                ICON: 'fa-linkedin ',
                USERNAME: 'eburdon',
                LINK: 'https://www.linkedin.com/in/eburdon',
                LINK_TEXT: 'VISIT PROFILE',
                KEYWORDS: ['Employment', 'Volunteering', 'Education'],
            },
            GITHUB: {
                NAME: 'GITHUB',
                ICON: 'fa-github',
                LINK_TEXT: 'VISIT OVERVIEW'
            },
            TWITTER: {
                NAME: 'TWITTER',
                ICON: 'fa-twitter',
                USERNAME: '@OneEaredMusic',
                LINK: 'https://twitter.com/OneEaredMusic',
                LINK_TEXT: 'SEND A TWEET',
                STATS: ['313 Tweets', '66 Followers', '236 Following '],
            },
        });
})();

(function() {

    'use strict';

    // This file composes default values for the social services
    angular
        .module('about')
        .constant('connectConstants', {
            EMAIL: {
                NAME: 'Email',
                ICON: 'fa-envelope-o',
                USERNAME: 'erikaeburdon@gmail.com',
                LINK_TEXT: 'Send Message',
                LINK: 'mailto:erikaeburdon@gmail.com',
            },
            LINKED_IN: {
                NAME: 'LinkedIn',
                ICON: 'fa-linkedin ',
                USERNAME: 'eburdon',
                LINK: 'https://www.linkedin.com/in/eburdon',
                LINK_TEXT: 'Visit Profile',
                KEYWORDS: ['Employment', 'Volunteering', 'Education'],
            },
            GITHUB: {
                NAME: 'GitHub',
                ICON: 'fa-github',
                LINK_TEXT: 'Visit Profile'
            },
            TWITTER: {
                NAME: 'Twitter',
                ICON: 'fa-twitter',
                USERNAME: '@OneEaredMusic',
                LINK: 'https://twitter.com/OneEaredMusic',
                LINK_TEXT: 'Tweet',
                STATS: ['285 Tweets', '58 Followers', '225 Following '],
            },
        });
})();

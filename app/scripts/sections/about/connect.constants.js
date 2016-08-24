(function() {

    'use strict';

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
                LINK_TEXT: 'View History',
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
                STATS: ['152 Tweets', '37 Followers', '171 Following '],
            },
        });
})();

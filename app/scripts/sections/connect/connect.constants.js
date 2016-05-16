(function() {

    'use strict';

    angular
        .module('connect')
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
                LINK_TEXT: 'Overview'
            },
            TWITTER: {
                NAME: 'Twitter',
                ICON: 'fa-twitter',
                USERNAME: '@OneEaredMusic',
                LINK: 'https://twitter.com/OneEaredMusic',
                LINK_TEXT: 'View Tweets',
                STATS: ['152 Tweets', '37 Followers', '171 Following '],
            },
            
            SOUNDCLOUD: {
                NAME: 'SoundCloud',
                ICON: 'fa-soundcloud',
                USERNAME: 'Karmaqueenn',
                LINK: 'https://soundcloud.com/karmaqueenn/sets',
                LINK_TEXT: 'Listen to Playlists',
                STATS: ['3 Playlists', '11 Followers', '57 Following '],
            },
            SPOTIFY: {
                NAME: 'Spotify',
                ICON: 'fa-spotify',
                USERNAME: 'erikaburdon',
                LINK: 'https://play.spotify.com/user/erikaburdons',
                LINK_TEXT: 'Listen to Playlists',
                STATS: ['4 Playlists', '2 Followers', '14 Following '],
            },
        });
})();

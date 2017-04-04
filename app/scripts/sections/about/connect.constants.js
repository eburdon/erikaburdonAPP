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
                LINK_TEXT: 'VISIT OVERVIEW',
                LINK: 'https://github.com/eburdon'
            },
            TWITTER: {
                NAME: 'TWITTER',
                ICON: 'fa-twitter',
                USERNAME: '@OneEaredMusic',
                LINK: 'https://twitter.com/OneEaredMusic',
                LINK_TEXT: 'SEND A TWEET',
                STATS: ['313 Tweets', '66 Followers', '236 Following '],
            },
        })
        .constant('webLinks', {
            BLOGS : {
                DEVTO: {
                    NAME : 'Dev.to',
                    ROOT : 'https://dev.to/',
                    POSTS: {
                        A : {
                            TITLE: 'What does it mean to be a Software Engineer?',
                            LINK: 'https://dev.to/oneearedmusic/what-does-it-mean-to-be-a-software-engineer'
                        }
                    }
                },
                PERSONAL: {
                    NAME: 'Erika\'s Blog',
                    ROOT: 'https://eburdon.github.io/',
                    POSTS: {
                        A : {
                            TITLE: 'C Pointer Review',
                            LINK: 'https://eburdon.github.io/2017/02/24/C-pointer-review/'
                        }
                    }
                }
            },
            YOUTUBE : {
                A : {
                    SERIES: 'Girls Talk Code',
                    HOST: 'Kristen Leake',
                    LINK: 'https://www.youtube.com/watch?v=TiJ2qNiyKtg&feature=youtu.be',
                    TITLE: 'How To Overcome the Fear of Pursuing Software Engineering'
                }
            },
            STACKEXCHANGE : {
                OVERFLOW : {
                    NAME: 'Stack Overflow',
                    LINK: 'https://stackoverflow.com/users/5557662/erika-burdon?tab=profile',
                    POINTS : 71
                },
                REVIEW: {
                    NAME: 'Code Review',
                    LINK: 'https://codereview.stackexchange.com/users/128939/erika-burdon?tab=profile',
                    POINTS: 103
                }
            }
        });
})();

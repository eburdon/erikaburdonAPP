(function() {

    'use strict';

    angular
        .module('header')
        .constant('headerConstants', {
            SITE_TITLE: 'ERIKA BURDON',
            CONTACT_EMAIL: 'erikaeburdon@gmail.com',
            CITY: 'Vancouver',
            PROVINCE: 'BC',
            COUNTRY: 'Canada',
            LINK: {
                GITHUB: 'https://github.com/eburdon',
                TWITTER: 'https://www.linkedin.com/in/eburdon',
                LINKED_IN: 'https://twitter.com/OneEaredMusic',
            }
        });
})();

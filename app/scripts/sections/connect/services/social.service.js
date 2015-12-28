'use strict';

angular.module('social.service', ['helper.factory'])
.factory('socialService', function($q, helperFactory) {
    var service = {};

    service.buildEmailObject = function (network) {
        return {
            network: network,
            email_link: 'erikaeburdon@gmail.com',
        }
    };

    service.buildLinkedInObject = function (network) {
        return {
            network: network,
            username: 'eburdon',
            page_link: 'https://www.linkedin.com/in/eburdon',
            types: ['Employment | ', ' Volunteering | ', ' Education ']
        }
    };

    service.buildGitHubObject = function (data) {

        var myData = {
            username: data.name,
            network: 'GitHub',
            page_link: data.html_url,
            gists_url: data.gists_url,
            repos: data.public_repos,
            followers: data.followers,
            following: data.following,
            gists: data.public_gists,
        };

        myData.stats = [
        ' ' + myData.repos +' Repositories |',
        ' ' + myData.following +' Following |',
        ' ' + myData.followers +' Followers ',
        ];

        return myData;
    };

    service.buildSoundCloudObject = function (network) {
        return {
            network: network,
            username: 'Karmaqueenn',
            page_link: 'https://soundcloud.com/karmaqueenn/sets',
            stats: ['3 Playlists | ', ' 11 Followers | ', ' 57 Following ']
        }
    };

    service.buildFacebookObject = function (network) {
        return {
            network: network,
            username: 'eburdon',
            page_link: 'https://www.facebook.com/eeburdon'
        }
    };

    service.buildTwitterObject = function (network) {
        return {
            network: network,
            username: '@OneEaredMusic',
            page_link: 'https://twitter.com/OneEaredMusic',
            stats: [' 23 Followers | ', ' 150 Following ']
        }
    };

    service.buildGooglePlusObject = function (network) {
        return {
            network: network,
            username: 'erikaeburdon',
            email_link: 'erikaeburdon@gmail.com',
            page_link: 'https://plus.google.com/u/0/109863026229354313187/posts/p/pub',
        }
    };

    service.createSocialObject = function (network) {
        if (network === 'Email') {
            return service.buildEmailObject(network);

        } else if (network === 'LinkedIn') {
            return service.buildLinkedInObject(network);

        } else if (network === 'GitHub') {
            var promise, dataPromise;

            promise = $q.defer();

            dataPromise = helperFactory.getGitHubInformation().then(function (data) {
                promise.resolve(service.buildGitHubObject(data));
            });

            return promise;

        } else if (network === 'SoundCloud') {
            return service.buildSoundCloudObject(network);
        } else if (network === 'Facebook') {
            return service.buildFacebookObject(network);

        } else if (network === 'Twitter') {
            return service.buildTwitterObject(network);

        } else if (network === 'GooglePlus') {
            return service.buildGooglePlusObject(network);

        } else {
            return undefined;
        }
    };


    return service;
});

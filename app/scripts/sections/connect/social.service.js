'use strict';

angular.module('social.service', ['helper.factory'])
.factory('socialService', function(helperFactory) {
    var service = {};

    service.buildEmailObject = function (network) {
        return {
            network: network,
            email_link: 'erika@erikaburdon.ca',
        }
    };

    service.buildLinkedInObject = function (network) {
        return {
            network: network,
            username: 'eburdon',
            page_link: 'https://www.linkedin.com/in/eburdon'
        }
    };

    service.buildGitHubObject = function () {

        // Todo: build promise around this

        var url = 'https://api.github.com/users/eburdon';

        helperFactory.getRequest(url).then(function (data) {

            // return {
            //     username: data.name,
            //     network: 'GitHub',
            //     page_link: data.repos_url,
            //     gists_url: data.gists_url,
            //     repos: data.public_repos,
            //     followers: data.followers,
            //     following: data.following,
            //     gists: data.public_gists
            // };
        });

        return {
            network: 'GitHub'
        };
    };

    service.buildSoundCloudObject = function (network) {
        return {
            network: network,
            username: 'Karmaqueenn',
            page_link: 'https://soundcloud.com/karmaqueenn/sets',
            playlists: 3
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
            page_link: 'https://twitter.com/OneEaredMusic'
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
        // Todo: UpWork?

        if (network === 'Email') {
            return service.buildEmailObject(network);
        } else if (network === 'LinkedIn') {
            return service.buildLinkedInObject(network);
        } else if (network === 'GitHub') {
            return service.buildGitHubObject();
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

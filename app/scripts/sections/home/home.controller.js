(function() {

    'use strict';

    angular
    .module('home')
    .controller('EbHomeController', EbHomeController);

    EbHomeController.$inject = ['helperFactory'];

    function EbHomeController(helperFactory) {

        var TAGLINES = [
            'BIG IDEAS',
            'MUSIC',
            'SOFTWARE ENGINEERING',
            'CAMPING',
            'SCALABILITY',
            'DESIGN',
        ];

        var vm = this;

        vm.offset = 0;
        vm.tagline = TAGLINES[vm.offset];

        vm.exchangeTagline = exchangeTagline;

        vm.whatsInteresting = 'This page was built using Foundation for Apps grid Framework. I tried a couple of fancy CSS tricks, but that\'s it. This button is also a directive you\'ll find throughout the site.'

        activate();

        ////////

        function activate() {
            // scroll to top of page on load
            document.getElementById('home-page').scrollTop = 0;

            helperFactory
                .getGitHubInformation()
                .then(function(githubInfo) { vm.githubImage = githubInfo.avatar_url; });
        }

        function exchangeTagline() {
            vm.offset += 1;

            if (vm.offset === TAGLINES.length) { vm.offset = 0; }

            vm.tagline = TAGLINES[vm.offset];
        }
    };
})();

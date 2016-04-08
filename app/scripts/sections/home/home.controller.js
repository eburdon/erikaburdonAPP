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

        vm.githubImage = undefined;

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

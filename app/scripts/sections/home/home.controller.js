(function() {

    'use strict';

    angular
    .module('home')
    .controller('EbHomeController', EbHomeController);

    EbHomeController.$inject = ['helperFactory'];

    function EbHomeController(helperFactory) {

        var vm = this;

        vm.whatsInteresting = 'This page was built using Foundation for Apps grid Framework. I tried a couple of fancy CSS tricks, but that\'s it. This button is also a directive you\'ll find throughout the site.'

        activate();

        ////////

        function activate() {
            // scroll to top of page on load
            $(document).ready(function(){
                $(this).scrollTop(0);
            });
        }
    };
})();

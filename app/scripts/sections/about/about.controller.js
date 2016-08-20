(function() {

    'use strict';

    angular
        .module('about')
        .controller('EbAboutController', EbAboutController);

        EbAboutController.$inject = ['settings'];

        function EbAboutController(settings) {

            var vm = this;
        }
})();

(function() {

    'use strict';

    angular
        .module('header')
        .controller('headerController', headerController);

        headerController.$inject = ['headerConstants'];

        function headerController(headerConstants) {

            var vm = this;

            vm.constants = headerConstants;
        }
})();

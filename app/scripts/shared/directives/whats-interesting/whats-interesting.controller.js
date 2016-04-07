(function() {

    'use strict';

    angular
        .module('whatsInteresting')
        .controller('whatsInterestingController', whatsInterestingController);

        whatsInterestingController.$inject = [];

        function whatsInterestingController() {

            var vm = this;

            vm.showText = false;
            vm.toggleText = toggleText;

            function toggleText() {
            	vm.showText = !vm.showText;
            }
        }
})();

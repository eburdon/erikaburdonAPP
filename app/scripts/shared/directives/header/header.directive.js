(function() {

    'use strict';

    /**
    * @desc displays or hides a paragraph on button click
    * @param 'text' Plain-text description about what's interesting about the page
    * @example <whats-interesting-directive text='TEXT'></whats-interesting-directive>
    */

    angular
        .module('whatsInteresting', [])
        .directive('whatsInterestingDirective', whatsInterestingDirective);

        whatsInterestingDirective.$inject = [];

        function whatsInterestingDirective() {
            return {
                scope: {
                    text:'='
                },
                restrict: 'E',
                templateUrl: 'scripts/shared/directives/whats-interesting/whats-interesting.html',
                bindToController: true,
                controller: 'whatsInterestingController',
                controllerAs: 'wiVM'
            }
        }
})();

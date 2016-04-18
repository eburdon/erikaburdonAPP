(function() {

    'use strict';

    /**
    * @desc displays site banner
    * @param 'title' Optional title to show in header under site name
    * @example <site-header title="Past Projects"></site-header>
    */

    angular
        .module('header', [])
        .directive('siteHeader', headerDirective);

        headerDirective.$inject = [];

        function headerDirective() {
            var directive =  {
                restrict: 'E',
                templateUrl: 'scripts/shared/directives/header/header.html',
                scope: {
                    title:'@'
                },
                controller: 'headerController',
                controllerAs: 'headerVm',
                bindToController: true,
                link: linkFunc,
            }

            return directive;

            function linkFunc(scope, el, attr, ctrl) {
                ctrl.title = attr.title;
            }
        }
})();

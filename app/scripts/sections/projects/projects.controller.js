(function() {

    'use strict';

    angular
        .module('projects')
        .controller('EbProjectsController', EbProjectsController);

        EbProjectsController.$inject = ['connectConstants'];

        function EbProjectsController(connectConstants) {
            var vm = this;

            vm.github = connectConstants.GITHUB;
            vm.linkedin = connectConstants.LINKED_IN;

            // scroll to top of page on load
            $(document).ready(function(){
                $(this).scrollTop(0);
                document.title = "Erika Burdon | Projects";
            });
        };
})();

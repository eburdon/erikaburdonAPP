(function() {

    'use strict';

    angular
        .module('projects')
        .controller('EbProjectsController', EbProjectsController);

        EbProjectsController.$inject = [];

        function EbProjectsController() {
            // scroll to top of page on load
            $(document).ready(function(){
                $(this).scrollTop(0);
            });
        };
})();

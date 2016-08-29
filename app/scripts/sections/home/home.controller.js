(function() {

    'use strict';

    angular
        .module('home')
        .controller('EbHomeController', EbHomeController);

        EbHomeController.$inject = [];

        function EbHomeController() {

            var vm = this;

            $(document).ready(function(){
                $(this).scrollTop(0);
                document.title = "Erika Burdon";
            });
        };
})();

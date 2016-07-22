(function() {

    'use strict';

    angular
        .module('facebook')
        .controller('EbFacebookController', EbFacebookController);

        EbFacebookController.$inject = ['$http', 'settings'];

        function EbFacebookController($http, settings) {

            var vm = this;

            activate();

            ////////

            function activate() {
                // scroll to top of page on load
                $(document).ready(function(){
                    $(this).scrollTop(0);
                });

                console.log("Hello new page.");

            }
        }
})();

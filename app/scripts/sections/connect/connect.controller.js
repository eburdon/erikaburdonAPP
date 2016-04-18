(function() {
    
    'use strict';

    angular.module('connect')
        .controller('EbConnectController', EbConnectController);

    EbConnectController.$inject = ['connectConstants', 'socialService', '$scope']

    function EbConnectController(connectConstants, socialService, $scope) {

        document.getElementById('connect-page').scrollTop = 0

        var vm = this;

        // scroll to top of page on load
        $(document).ready(function(){
            $(this).scrollTop(0);
        });

        vm.constants = connectConstants;
        vm.socialItems = {};
        vm.whatsInteresting = 'The GitHub data was collected via the public GitHub API using a promise. Soon, I hope to collect all social data this way.';

        activate();

        ////////

        function activate() {

            angular.copy(vm.constants, vm.socialItems);

            socialService.createSocialObject('GitHub')
                .then(function(result) { angular.extend(vm.socialItems.GITHUB, result); });
        }
    }
})();

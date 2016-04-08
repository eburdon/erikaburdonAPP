(function() {

    'use strict';

    angular
        .module('workspace')
        .controller('EbWorkspaceController', EbWorkspaceController);

        EbWorkspaceController.$inject = ['$http', '$log', 'settings']

        function EbWorkspaceController($http, $log, settings) {

            var vm = this;
        }
})();

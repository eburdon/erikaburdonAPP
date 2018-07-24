(function() {

    'use strict';

    angular
        .module('wedding')
        .controller('EbEntryController', EbEntryController);

        EbEntryController.$inject = [];

        function EbEntryController() {
          console.log('HELLO ENTRY');
        };
})();

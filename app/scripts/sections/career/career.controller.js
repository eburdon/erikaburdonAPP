(function() {
    
    'use strict';

    angular.module('career')
        .controller('EbCareerController', EbCareerController);

    EbCareerController.$inject = ['connectConstants']

    function EbCareerController(connectConstants) {

    	var vm = this;

        vm.linkedin = connectConstants.LINKED_IN;

    	$(document).ready(function(){
            $(this).scrollTop(0);
            document.title = "Erika Burdon | Career";
        });
    }
})();

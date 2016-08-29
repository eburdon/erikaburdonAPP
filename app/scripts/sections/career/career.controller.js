(function() {
    
    'use strict';

    angular.module('career')
        .controller('EbCareerController', EbCareerController);

    EbCareerController.$inject = []

    function EbCareerController() {

    	var vm = this;

    	$(document).ready(function(){
            $(this).scrollTop(0);
            document.title = "Erika Burdon | Career";
        });
    }
})();

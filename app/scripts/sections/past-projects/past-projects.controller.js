(function() {

	'use strict';

	angular
		.module('past-projects')
		.controller('EbPastProjectsController', EbPastProjectsController);

		EbPastProjectsController.$inject = [];

		function EbPastProjectsController() {
			// scroll to top of page on load
            $(document).ready(function(){
                $(this).scrollTop(0);
            });
		};
})();

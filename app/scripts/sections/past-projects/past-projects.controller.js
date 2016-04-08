(function() {

	'use strict';

	angular
		.module('past-projects')
		.controller('EbPastProjectsController', EbPastProjectsController);

		EbPastProjectsController.$inject = [];

		function EbPastProjectsController() {

		    document.getElementById('past-projects-page').scrollTop = 0;

		};
})();

(function() {

    'use strict';

    angular
        .module('crystalBall')
        .controller('EbCrystalBallController', EbCrystalBallController);

        EbCrystalBallController.$inject = ['$http', 'settings'];

        function EbCrystalBallController($http, settings) {

            var vm = this;

            vm.ask = ask;
            vm.flipValue = flipValue;

            vm.whatsInteresting = 'This is the first place my App makes a call to my backend REST API. This API is also hosted on Amazon on an Elastic Beanstalk Instance. It\'s a scala service running on a tomcat server. If you\'re able to get a response from the mysterious crystal ball, that means a doGet call was successfully made to my endpoint, and the string response was returned in a useable JSON format!';

            activate();

            ////////

            function activate() {
                // scroll to top of page on load
                $(document).ready(function(){
                    $(this).scrollTop(0);
                });

                vm.showWhatsHappening = false;
                vm.resultText = '(Click to reveal your future...)';
            }

            function ask() {
                var endpoint =  settings.API_URL + '/crystalball'

                $http({method: 'GET', url: endpoint}).then(_setResult);
            }

            function flipValue() {
                vm.showWhatsHappening = !vm.showWhatsHappening;
            }

            function _setResult(result) {
                if (!result.data) { return; }

                var data = result.data;
                vm.resultText = data.response;
            }
        }
})();

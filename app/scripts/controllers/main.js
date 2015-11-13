'use strict';

/**
 * @ngdoc function
 * @name erikaburdonAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the erikaburdonAppApp
 */
angular.module('erikaburdonApp')
  .controller('MainCtrl', function ($scope, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.info('MAIN PAGE');

  });

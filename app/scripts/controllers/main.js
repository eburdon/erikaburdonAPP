'use strict';

angular.module('erikaburdonApp')
  .controller('MainCtrl', function ($scope, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.info('MAIN PAGE');

  });

'use strict';

angular.module('erikaburdonApp')
  .controller('AboutCtrl', function ($scope, $log) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $log.info('ABOUT PAGE');

  });

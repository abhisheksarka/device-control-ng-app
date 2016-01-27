'use strict';

/**
 * @ngdoc function
 * @name app.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the app
 */
angular.module('app')
  .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.params = {
      led: false,
      xbox: true
    };

    $scope.$watch('params.led', function(nv, ov) {
      if(nv) {
        $http.get('/led/on');
      } else {
        $http.get('/led/off');
      }
    });
  }]);

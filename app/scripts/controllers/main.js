'use strict';

/**
 * @ngdoc function
 * @name singlePageApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the singlePageApp
 */

var app = angular.module('singlePageApp')


  app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };

    $scope.items = [
      ['A', 'B', 'C'],
      ['item1', 'item2', 'item3'],
      ['item4', 'item5', 'item6']
    ];
  }]);

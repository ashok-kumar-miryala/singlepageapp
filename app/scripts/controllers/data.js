// // app/scripts/controllers/groups.js
//
'use strict';
//
// var app = angular.module('singlePageApp')
//
//   app.controller('DataCtrl', ['$scope', 'Data', function ($scope) {
//     // $scope.groups = Group.query();
//     $scope.firstname = {"name" : "ashok"}
//   }]);

var app = angular.module('singlePageApp')

app.angular.module('singlePageApp', [])
  .controller('DataCtrl', ['$scope', function($scope) {
    $scope.username = 'World';

    $scope.sayHello = function() {
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);

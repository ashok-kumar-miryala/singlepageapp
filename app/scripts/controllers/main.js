'use strict';
var app = angular.module('singlePageApp')

app.controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
$scope.headers =["","Type","Name", "Title","Phone","Ext","Email"]
  $http({
    method : "GET",
    url : "http://localhost:3000/contacts"
  }).then(function mySuccess(response) {
    $scope.contacts= response.data;

  }, function myError(response) {
    // error handling goes here
    console.log(response)
    $scope.data = response.data || 'Request failed';
  });

}]);

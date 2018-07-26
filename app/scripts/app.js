'use strict';

/**
 * @ngdoc overview
 * @name singlePageApp
 * @description
 * # singlePageApp
 *
 * Main module of the application.
 */
angular
  .module('singlePageApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/list', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/data', {
        templateUrl: 'views/data.html',
        controller: 'DataCtrl',
        controllerAs: 'data'
      })
      .otherwise({
        redirectTo: '/'
      });

  });

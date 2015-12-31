'use strict';

/**
 * @ngdoc overview
 * @name dwaldroupApp
 * @description
 * # dwaldroupApp
 *
 * Main module of the application.
 */
angular
  .module('dwaldroupApp', [
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
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

'use strict';

/**
 * @ngdoc overview
 * @name websiteApp
 * @description
 * # websiteApp
 *
 * Main module of the application.
 */
angular
  .module('websiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main',
        projectName : 'Other'
      })
      .when('/microservices', {
        templateUrl: 'views/microservices.html',
        controller: 'MicroservicesCtrl',
        controllerAs: 'microservices',
        projectName : 'Microservices'
      })
      .when('/todo', {
        templateUrl: 'views/todoexample.html',
        controller: 'TodoexampleCtrl',
        controllerAs: 'todoexample',
        projectName: 'Todos'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

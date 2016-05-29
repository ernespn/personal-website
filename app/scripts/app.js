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
        controllerTitle: 'Home'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about',
        controllerTitle : 'About'
      })
      .when('/todo', {
        templateUrl: 'views/todoexample.html',
        controller: 'TodoexampleCtrl',
        controllerAs: 'todoexample',
        controllerTitle: 'TODO example'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


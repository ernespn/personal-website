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
      .when('/deployment', {
         templateUrl: 'views/deployment.html',
         controller: 'DeploymentCtrl',
         controllerAs: 'deployments',
         projectName : 'Deployment',
         image: 'images/portfolio/Deployment.png'
       })

      .when('/microservices', {
        templateUrl: 'views/microservices.html',
        controller: 'MicroservicesCtrl',
        controllerAs: 'microservices',
        projectName : 'Microservices',
        image: 'images/portfolio/Microservices.png'
      })
      .when('/todo', {
        templateUrl: 'views/todoexample.html',
        controller: 'TodoexampleCtrl',
        controllerAs: 'todoexample',
        projectName: 'Todos',
        image: 'images/portfolio/Todos.png'
      });
  });

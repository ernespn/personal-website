'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.greeting = "TEST";
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

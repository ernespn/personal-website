'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('NavigationCtrl', ['$scope', '$location', function($scope, $location){
    $scope.menus = [
      {path: '/', title: 'Home'},
      {path: '/about', title: 'About'},
      {path: '/todo', title: 'Todo example'},
    ];
    $scope.isActive = function(menu) {
      if (menu.path == $location.path()) {
        return true;
      }
      return false;
    };
  }]);


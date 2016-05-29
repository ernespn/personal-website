'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:NavigationCtrl
 * @description
 * # NavigationCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('NavigationCtrl', ['$scope', '$location', '$route', function($scope, $location, $route){
    //$scope.menus = [
    //  {path: '/', title: 'Home'},
    //  {path: '/about', title: 'About'},
    //  {path: '/todo', title: 'Todo example'},
    //];
    $scope.Generatemenus = (function(){
        var menus = [];
        angular.forEach($route.routes, function(route){
            if (typeof route.controllerTitle === "undefined"){
            
            }else{
                menus.push({path: route.originalPath, title: route.controllerTitle});
            }
        });
        return menus;                   
    });
    $scope.menus = $scope.Generatemenus();
    $scope.isActive = function(menu) {
      if (menu.path == $location.path()) {
        return true;
      }
      return false;
    };
  }]);


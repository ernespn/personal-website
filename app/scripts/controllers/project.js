'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:ProjectCtrl
 * @description
 * # ProjectCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('ProjectCtrl', ['$scope', '$location', '$route', function($scope, $location, $route){
    $scope.GenerateProjects = (function(){
        var projects = [];
        angular.forEach($route.routes, function(route){
            if (typeof route.projectName !== 'undefined'){
                projects.push({path: route.originalPath, name: route.projectName});
            }
        });
        return projects;
    });
    $scope.projects = $scope.GenerateProjects();
  }]);

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:TodoexampleCtrl
 * @description
 * # TodoexampleCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('TodoexampleCtrl', function ($scope) {
    $scope.todos = [];
    $scope.addTodo = function(){
        $scope.todos.push($scope.todo);  
        $scope.todo = '';
    };
    $scope.removeTodo = function(index){
        $scope.todos.splice(index, 1);
    };
    
  });

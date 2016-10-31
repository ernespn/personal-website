'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:TodoexampleCtrl
 * @description
 * # TodoexampleCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('TodoexampleCtrl', function ($scope, $http, $location) {
    $scope.url = 'http://' + $location.host() + ':8070/todo';
    $scope.todos = [];
    $scope.getAllTodos = function (){
      $http.get($scope.url)
      .success(function(data) {
        $scope.todos = data;
      })
      .error(function (data, status, header, config) {
        console.log('Data:'+data+'hr />status: ' + status + '<hr />headers: ' + header + '<hr />config: ' + config );
      });
    };
    $scope.addTodo = function(){
        var config = { headers: { 'Content-Type': 'application/json'} };
        var data = { what : $scope.todo };
        $http.post($scope.url, data, config).then(function() { $scope.getAllTodos(); });
        $scope.todo = '';
    };
    $scope.removeTodo = function(id){
        var config = { headers: { 'Content-Type': 'application/json'}};
        $http.delete($scope.url+'/'+id, config).then(function() { $scope.getAllTodos(); });
    };
    $scope.loadData = $scope.getAllTodos();

  });

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MicroservicesCtrl
 * @description
 * # MicroservicesCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MicroservicesCtrl', function ($scope, $http) {
    $scope.result = '';
    $scope.from = '';
    $scope.submit = function (){
       
        if ($scope.num1 && $scope.num2){
          var url = 'http://localhost:8080/add/'+$scope.num1+'/'+$scope.num2;
          $http.get(url).success( function(response) {
            $scope.result = response.result; 
            $scope.from = response.from; 
          });
          
          // $scope.result = parseInt($scope.num1) + parseInt($scope.num2);
          // $scope.from = 'Angular generation';
        }
    };


});

'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MicroservicesCtrl
 * @description
 * # MicroservicesCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MicroservicesCtrl', function ($scope, $http, $location) {
    $scope.result = '';
    $scope.from = '';
    $scope.submit = function (){
       
        if ($scope.num1 && $scope.num2){
          var url = 'http://'+$scope.subdomain()+':8080/add/'+$scope.num1+'/'+$scope.num2;
          $http.get(url).success( function(response) {
            $scope.result = response.result; 
            $scope.from = response.from; 
          });
        }
    };
    
    $scope.subdomain = function(){
      var host = $location.host();
      if (host.indexOf('.') < 0) 
         return null;
      else
        return host.split('.')[0];
    };
});

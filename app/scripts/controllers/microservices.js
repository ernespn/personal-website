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
          var url = 'http://'+$scope.getUrl()+'/add/'+$scope.num1+'/'+$scope.num2;
          $http.get(url).success( function(response) {
            $scope.result = response.result; 
            $scope.from = response.from; 
          });
        }
    };

    $scope.getUrl = function (){
      var host = $location.host();
      var subdomain = $scope.subdomain();
      if (subdomain === 'srv'){
         return host;
      }
      return host+':8080';
    };

    $scope.subdomain = function(){
      var host = $location.host();
      if (host.indexOf('.') < 0) {
         return null;
      }
      return host.split('.')[0];
    };
});

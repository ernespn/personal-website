'use strict';

/**
 * @ngdoc function
 * @name websiteApp.controller:MicroservicesCtrl
 * @description
 * # MicroservicesCtrl
 * Controller of the websiteApp
 */
angular.module('websiteApp')
  .controller('MicroservicesCtrl', function ($scope) {
    $scope.result = '';
    $scope.from = '';
    $scope.submit = function (){
        if ($scope.num1 && $scope.num2){
          $scope.result = parseInt($scope.num1) + parseInt($scope.num2);
          $scope.from = 'Angular generation';
        }
    };
});

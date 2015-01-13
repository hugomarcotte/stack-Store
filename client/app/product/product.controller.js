'use strict';

angular.module('stackStoreApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams) {
    $scope.message = 'Hello';

    $scope.pID = $stateParams.id;

    $http.get('/api/products/'+$scope.pID).success(function(product) {
    	$scope.product = product;
    });

  });

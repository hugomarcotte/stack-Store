'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, order) {
    $scope.message = 'Hello';

    order.getCurrentOrder(function(currentOrder) {
    	$scope.order = 	currentOrder;
    });

  });

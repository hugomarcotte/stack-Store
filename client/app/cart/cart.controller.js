'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, order, $cookieStore) {
    $scope.message = 'Hello';

    order.getCurrentOrder(function(currentOrder) {
    	$scope.order = 	currentOrder;
    	//$cookieStore.put('cart', currentOrder)
    });

  });

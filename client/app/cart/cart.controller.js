'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, Cart, $cookieStore) {
    $scope.message = 'Hello';
    $scope.order = Cart.getCart();
    // order.getCurrentOrder(function(currentOrder) {
    // 	$scope.order = 	currentOrder;

    // 	//$cookieStore.put('cart', currentOrder)
    // });

  });

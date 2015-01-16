'use strict';

angular.module('stackStoreApp')
  .controller('CheckoutCtrl', function ($scope, $cookieStore) {
    $scope.order = $cookieStore.get('cart');
    
    $scope.totalPriceCalculator = function(){
    	$scope.totalPrice = 0
    	$scope.order.forEach(function(item){
    		$scope.totalPrice += (item.product.price * item.qty);
    	})
    	return $scope.totalPrice;
    }

  });

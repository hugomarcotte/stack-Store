'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, Cart, $cookieStore) {
    $scope.cartOrder = Cart.getCart();
    $scope.isSaved = false;

    $scope.cartIsEmpty = $scope.cartOrder.length == 0;

    $scope.removeItem = function(product) {
      Cart.removeItem(product);
      $scope.cartOrder = Cart.getCart();
      $scope.cartIsEmpty = $scope.cartOrder.length == 0;
    };

    $scope.cartUpdate = function() {
    	Cart.updateCart($scope.cartOrder);
    	$scope.isSaved = true;
    };

    $scope.qtyChange = function(){
    	$scope.isSaved = false;
    }	

  });

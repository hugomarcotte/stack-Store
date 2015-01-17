'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, Cart, CartCookies,$cookieStore) {
    var cartId = $cookieStore.get('cart');
    
    Cart.cartPage({id:cartId},function(results){
      $scope.cart = results.products;
      console.log('Cart' ,$scope.cart)
      var countProducs




    });
    $scope.isSaved = false;

    // $scope.cartIsEmpty = $scope.cart.length == 0;

    $scope.removeItem = function(product) {
      Cart.removeItem(product);
      $scope.cart = Cart.getCart();
      // $scope.cartIsEmpty = $scope.cart.length == 0;
    };

    $scope.cartUpdate = function() {
    	Cart.updateCart($scope.cart);
    	$scope.isSaved = true;
    };

    $scope.qtyChange = function(){
    	$scope.isSaved = false;
    }	

  });

'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, Cart, CartCookies,$cookieStore) {
    var cartId = $cookieStore.get('cart');
    $scope.currentCart = {};
    
    Cart.cartPage({id:cartId},function(results){
      $scope.cart = results.products;
    });

    $scope.isSaved = false;

    // $scope.cartIsEmpty = $scope.cart.length == 0;

    $scope.removeItem = function(productId) {
      CartCookies.removeItem(productId);
      
      $scope.cart = $scope.cart.filter(function(item){
         return item.productId._id!==productId
      })
    };

    $scope.cartUpdate = function(cart) {
      var currentCart = []
      cart.forEach(function(item) {
        currentCart.push({
          productId: item.productId._id,
          _id: item._id,
          qty: item.qty
        })
      })
      console.log(currentCart);
    	Cart.updateCart({id: cartId}, {products: currentCart});
    	$scope.isSaved = true;
    };

    $scope.qtyChange = function(){
    	$scope.isSaved = false;
    }	

  });

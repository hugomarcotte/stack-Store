'use strict';

angular.module('stackStoreApp')
.factory('Cart',function (Auth, User, $http, $cookieStore) {
  var currentOrder = [];

  return {
  	getCart: function() {
  		return $cookieStore.get('cart');
  	},
    addItem : function(product){
      
      // pass quantity (product detail)
      // update quantity if product already in cart
      currentOrder = $cookieStore.get('cart') || [];
      currentOrder.push(product);
      $cookieStore.put('cart', currentOrder)

    },
    removeItem : function() {

    },
    clearCart: function(){
    	
    }


 }
});

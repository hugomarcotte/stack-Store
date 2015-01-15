'use strict';

angular.module('stackStoreApp')
.factory('Cart',function (Auth, User, $http, $cookieStore) {
  var currentOrder = [];

  return {
  	getCart: function() {
  		return $cookieStore.get('cart');
  	},
    updateCart: function(currentOrder){
      $cookieStore.put('cart', currentOrder)
    },
    addItem : function(product, qty){

      // pass quantity (product detail)
      // update quantity if product already in cart
      currentOrder = $cookieStore.get('cart') || [];

      var find = false;
      currentOrder.forEach(function(item){
        if(item.product._id === product._id) {
          item.qty += qty;
          find = true;
        }
      });

      if(!find) {
        currentOrder.push({product:product, qty:qty});
      }

      $cookieStore.put('cart', currentOrder)

    },
    removeItem : function(product) {

      currentOrder = $cookieStore.get('cart') || [];

      currentOrder.forEach(function(item, index){
     
        if(item.product._id === product.product._id) {
          currentOrder.splice(index,1);
        }
      });

      $cookieStore.put('cart', currentOrder)
    },
    clearCart: function(){

    }


 }
});

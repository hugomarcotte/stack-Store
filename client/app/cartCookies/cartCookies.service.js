'use strict';

angular.module('stackStoreApp')
.factory('CartCookies',function (Auth, User, $http, $cookieStore) {
  var currentOrder = [];

  return {
  	getCart: function() {
  		return $cookieStore.get('cart');
  	},

    createCookie: function(cartId){
      $cookieStore.put('cart', cartId)

    },
    addItem : function(productId, qty){

      currentOrder = $cookieStore.get('cart') || [];
      var found = false;
      currentOrder.forEach(function(item){        
        if(item.product === productId) {
          item.qty += qty;
          found = true;
        }
      });
      if(!found) {
        currentOrder.push({product:productId, qty:qty});
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

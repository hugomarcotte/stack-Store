'use strict';

angular.module('stackStoreApp')
.factory('CartCookies',function (Auth, User, $http, $cookieStore,Cart) {
  var currentOrder = [];

  return {


    addToCart: function(productId,quantity){ 
      var cartId = $cookieStore.get('cart');
      var numToAdd = quantity || 1;
      if(cartId){
        Cart.get({id:cartId},function(result){
          while(numToAdd){
            result.products.push(productId);
            numToAdd--
          }

          Cart.updateCart({id: cartId},{products:result.products},function(secondRes){
          })
        })
      } else {
        var userId = Auth.getCurrentUser()._id;
        var products=[];
        while(numToAdd){
          products.push(productId);
          numToAdd--
        }
        var newCart ={userId: userId, products: products}
          Cart.save(newCart,function(createdCart){
            $cookieStore.put('cart',createdCart._id)
          });
      }
    },

  	getCart: function() {
  		return $cookieStore.get('cart');
  	},

    // addItem : function(productId, qty){

    //   currentOrder = $cookieStore.get('cart') || [];
    //   var found = false;
    //   currentOrder.forEach(function(item){        
    //     if(item.product === productId) {
    //       item.qty += qty;
    //       found = true;
    //     }
    //   });
    //   if(!found) {
    //     currentOrder.push({product:productId, qty:qty});
    //   }
    //   $cookieStore.put('cart', currentOrder)
      

    // },
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

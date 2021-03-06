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
        var alreadyInCart = false;
          //Ask someone why this filter works
          // var productsUnique = result.products.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
          result.products.forEach(function(product){
            //if match, flag it. After loop if nothing matched add it
            if(product['productId']===productId){
              alreadyInCart = true;
              product.qty+=numToAdd;
            }; 
          }); 
          //after forEach, push to cart if it's not there already
          if(!alreadyInCart){
            result.products.push({productId:productId,qty:numToAdd})
          };
          //Now update cart
          Cart.updateCart({id:cartId},{products:result.products})
        })

      } else {
        var userId = Auth.getCurrentUser()._id || parseInt(Math.random()*10000000)+'-fake';
        //Not a great fake Id, but we'll never have 10m users
        var products=[{productId:productId,qty:numToAdd}];
        var newCart ={userId: userId, products: products}
          Cart.save(newCart,function(createdCart){
            console.log(createdCart, 'working');
            $cookieStore.put('cart',createdCart._id)
          });
      }
    },

  	getCart: function() {
  		var cartId = $cookieStore.get('cart');
      return Cart.get({id:cartId})
  	},

    removeItem : function(productId) {
      var cartId = $cookieStore.get('cart');
      Cart.get({id:cartId},function(result){
        result.products.forEach(function(prod,i,arr){
          if(prod.productId === productId){
            result.products.splice(i,1);
          }
        });

        Cart.updateCart({id:cartId},{products:result.products})
        
      })

      // $cookieStore.put('cart', currentOrder)
    }


 }
});

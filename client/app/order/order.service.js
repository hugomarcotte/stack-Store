'use strict';

angular.module('stackStoreApp')
.factory('order',function (Auth, User, $http, $cookieStore) {
  var orders= [];
  var currentOrder = {};
  //currentOrder._user = ""

  return {
    addItem : function(product){
      console.log('add item');
      if(Auth.isLoggedIn()){
         console.log("cart")
        currentOrder = $cookieStore.get('cart') || {_user:""};
     //   console.log($cookieStore.get('cart'));
        // console.log(orders);
        currentOrder._user = Auth.getCurrentUser()._id;
        ///check if user already has an active cart
      
        if(currentOrder._id){
          //currentOrder = $cookieStore.get('cart')
          console.log("current Order true")
          currentOrder._products.push(product);

          console.log("before update");
          console.log(currentOrder);

          $http.put('/api/orders/'+currentOrder._id, product).success(function(updatedOrder){
            //angular.copy(data, o.currentOrder);
            console.log("After update");
            console.log(updatedOrder);

            currentOrder = updatedOrder;
            //$cookieStore.put('cart', currentOrder);
          });
        } 
        else
        {
          currentOrder._products = [];
          currentOrder._products.push(product);
          
          $http.post('/api/orders/', currentOrder).success(function(newOrder){
            currentOrder = newOrder;
            console.log("cookieStore put");
            $cookieStore.put('cart', currentOrder);
            console.log("cookie store get")
            console.log($cookieStore.get('cart'))
            // console.log('current order:');
            // console.log(currentOrder);
          });      
        } 
      }
    },

    getCurrentOrder: function(callback){

      var user = Auth.getCurrentUser();
      if(Auth.isLoggedIn()){
        var id= user._id
        // IF cart is empty
       // if(currentOrder._products){
       //    // Get Order where user = current user id and completed == false
       //    $http.get('/api/orders/user/'+id).success(function(data){
       //     if(data.length >0){
       //      currentOrder = data[0];
       //      }
       //    })
       //  }
       //  else{
       //    currentOrder = currentOrder
       //  }
       $http.get('/api/orders/user/'+id).success(function(current){
        currentOrder = current;
        callback(currentOrder);
      })
     }
     callback(currentOrder);
   }
 }
});

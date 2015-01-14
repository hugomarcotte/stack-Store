'use strict';

angular.module('stackStoreApp')
.factory('order',function (Auth, User, $http) {
  var orders= [];
  var currentOrder = {};
  currentOrder._user = ""

  return {
    addItem : function(product){
      console.log('add item');
      if(Auth.isLoggedIn()){
         console.log("initial properties")
        console.log(currentOrder);
        // console.log(orders);
        currentOrder._user = Auth.getCurrentUser()._id;
        ///check if user already has an active cart
      
        if(currentOrder._id){
          console.log("current Order true")
          currentOrder._products.push(product);

          console.log("before update");
          console.log(currentOrder);

          $http.put('/api/orders/'+currentOrder._id, product).success(function(updatedOrder){
            //angular.copy(data, o.currentOrder);
            console.log("After update");
            console.log(updatedOrder);

            currentOrder = updatedOrder;
          });
        } 
        else
        {
          currentOrder._products = [];
          currentOrder._products.push(product);
          
          $http.post('/api/orders/', currentOrder).success(function(newOrder){
            currentOrder = newOrder;

            console.log('current order:');
            console.log(currentOrder);
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
        currentOrder = current[0];
        callback(currentOrder);
      })
     }
     callback(currentOrder);
   }
 }
});

'use strict';

angular.module('stackStoreApp')
  .factory('order',function (Auth, User, $http) {
    var o = { 
      orders:[],
      currentOrder: {_products: []}
    };

    // var foo = function(callback){
    //   var user
    //   if (user = Auth.getCurrentUser()){
    //     // $scope.user = user
    //     console.log("foo")
    //     callback();
    //   }
    // }
    // foo(o.getCurrentOrder)

    o.getAll = function(){
      $http.get('/api/orders/').success(function(data){
        angular.copy(data, o.orders)
      });
    };

    o.addItem = function(product){
     // console.log(product)
      console.log(o.currentOrder)
      o.currentOrder._products.push(product);
      console.log(o.currentOrder);
      if(Auth.isLoggedIn()){
        o.currentOrder._user = Auth.getCurrentUser()._id
        ///check if user already has an active cart
        if(o.currentOrder._id){
          //console.log(o.currentOrder)
          $http.put('/api/orders/'+o.currentOrder._id, o.currentOrder).success(function(data){
            angular.copy(data, o.currentOrder)
          })
        } 
        else
          {
            console.log("first time")
            console.log(o.currentOrder)
            $http.post('/api/orders/', o.currentOrder).success(function(data){
              angular.copy(data, o.currentOrder);
              console.log(o.currentOrder)
              //console.log(data);
          })      
        } 
      }
    };

    o.getCurrentOrder= function(){
      var user = Auth.getCurrentUser();
      if(Auth.isLoggedIn()){
        var id= user._id
        // IF cart is empty
       // console.log(o.currentOrder)
        if(o.currentOrder._products.length === 0){
          //console.log("no products ");
          // Get Order where user = current user id and completed == false
          $http.get('/api/orders/user/'+id).success(function(data){
           //console.log(data);
            if(data.length >0){
              angular.copy(data[0], o.currentOrder)  
            }
          })
        }
      }
    };  
    return o;
  });

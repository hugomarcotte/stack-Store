'use strict';

angular.module('stackStoreApp')
  .factory('order',function (Auth, $http) {
    var o = { 
      orders:[],
      currentOrder: {_products: []}
    };

    // var foo = function(callback){
    //   var user
    //   if (user = Auth.getCurrentUser()){
    //     $scope.user = user
    // callback
    //   }
    // }


    o.getAll = function(){
      $http.get('/api/orders').success(function(data){
        angular.copy(data, o.orders)
      });
    };

    o.addItem = function(product){
      

      o.currentOrder._products.push(product);

      if(Auth.isLoggedIn()){
        o.currentOrder._user = Auth.getCurrentUser()._id
        $http.post('/api/orders', o.currentOrder).success(function(data){
          angular.copy(data, o.currentOrder);
          //console.log(data);
        }).catch(function(err){
          console.log(err)
        })
      }
    };

    o.getCurrentOrder= function(){
      var user; 
      console.log('get current order');
      // console.log(Auth.isLoggedIn());
      console.log('user: ', Auth.getCurrentUser())
      if(user = Auth.getCurrentUser()){
        console.log(user);
        
        var id= user._id
        // IF cart is empty
        if(o.currentOrder._products.length === 0){
          console.log("no products ");
          // Get Order where user = current user id and completed == false
          $http.get('/api/orders/user/'+id).success(function(data){
            console.log(data);
            if(data.length >0){
              angular.copy(data[0], o.currentOrder)  
            }
          })
        }
      }
    };  
    return o;
  });

'use strict';

angular.module('stackStoreApp')
  .factory('editProduct', function ($http) {
    // Service logic
    // ...

    return {
      getProducts: function(cb){
        $http.get('/api/products').success(cb)
      },
      updateProduct: function(product){
        console.log('working')
          $http.put('/api/products/'+product._id, product);
        },
      deleteProduct: function(product){
        $http.delete('/api/products/'+product._id);
      },
      addProduct: function(product){
        $http.post('/api/products', product);
      }
    }

  });

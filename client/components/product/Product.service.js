'use strict';

angular.module('stackStoreApp')
  .factory('Product', function ($http) {
    // Service logic
    // ...

    var errorHandler = function(data,status,headers,config){
      console.log('Error ',status,': ',data)
    };

    return {
      getProducts: function(cb){
        $http.get('/api/products').success(cb)
          .error(errorHandler);
      },
      updateProduct: function(product){
        console.log('working')
          $http.put('/api/products/'+product._id, product)
            .error(errorHandler);
        },
      deleteProduct: function(product){
        $http.delete('/api/products/'+product._id)
          .error(errorHandler);
      },
      addProduct: function(product){
        $http.post('/api/products', product)
          .error(errorHandler);
      }
    }

  });

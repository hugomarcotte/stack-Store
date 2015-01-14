'use strict';

angular.module('stackStoreApp')
  .factory('Product', function ($resource) {
    // Service logic
    // ...
    return $resource('/api/products/:id',{
      id:'@_id'},
      {
        updateProduct: {
          method: 'PUT'
        }
      }
    )

})

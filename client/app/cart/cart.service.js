'use strict';

angular.module('stackStoreApp')
  .factory('Cart', function ($resource) {
    return $resource('/api/carts/:id/:prodId',
      {id:'@_id'},
      {
        updateCart:{
        method: 'PUT',
        params: {
                id: '@id',
                prodId: '@prodId'
                }
        }
      });
    }
);

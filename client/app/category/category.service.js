'use strict';

angular.module('stackStoreApp')
  .factory('Category', function ($resource) {
    
    return $resource('/api/categories/:id',{
      id:'@_id'});
    }
  );

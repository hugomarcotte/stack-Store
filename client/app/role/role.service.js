'use strict';

angular.module('stackStoreApp')
  .factory('Role', function ($resource) {
    // Service logic
    // ...
    return $resource('/api/roles/:id/:admin',{
      id:'@_id'});
  });

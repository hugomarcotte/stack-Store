'use strict';

angular.module('stackStoreApp')
  .factory('promotions', function ($resource, $http) {
    // Public API here
    return $resource('/api/promotions/:id', {id:'@_id'})
  });
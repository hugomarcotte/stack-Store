'use strict';

angular.module('stackStoreApp')
  .factory('Analytic', function ($resource) {

    return $resource('/api/analytics/:id',{
      id:'@_id'});
  });

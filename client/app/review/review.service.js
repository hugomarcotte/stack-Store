'use strict';

angular.module('stackStoreApp')
  .factory('Review', function ($resource) {

    // Public API here
    return $resource('/api/reviews')
  });

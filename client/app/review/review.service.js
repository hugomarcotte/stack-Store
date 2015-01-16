'use strict';

angular.module('stackStoreApp')
  .factory('Review', function ($resource) {

    // Public API here
    return $resource('/api/reviews/:newRoute/:productId',
    	{productId:'@_id'},
    	{
    		getProductReviews:{
    			method: 'GET',
    			newRoute: 'thisProductReviews',
    			isArray: true
    		}
    	}
    	)
  });

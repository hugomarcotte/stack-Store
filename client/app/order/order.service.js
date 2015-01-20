'use strict';

angular.module('stackStoreApp')
.factory('Order', function (Auth, User, $http, $cookieStore, $resource) {
  return $resource('/api/orders/:id/:populate', 
	  { id: '@_id' },
	  {
	  	getOrderItems: {
	  		method: 'GET',
	  		populate: 'populate',
	  		isArray: true
	  	}
	  }
	  )
})



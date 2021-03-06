'use strict';

angular.module('stackStoreApp')
	.factory('Order', function (Auth, User, $http, $cookieStore, $resource) {
  	return $resource('/api/orders/:id', 
			{ id: '@_id' },
			{
			  updateOrder: {
			  	method: 'PUT'
			  }
			}
		)
	})



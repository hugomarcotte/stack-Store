'use strict';

angular.module('stackStoreApp')
.factory('Order', function (Auth, User, $http, $cookieStore, $resource) {
  return $resource('/api/orders/:userid/:orderid',
  	{userid: '@_userid', orderid: '@_orderid'}
)})



'use strict';

angular.module('stackStoreApp')
  .controller('OrderDetailsCtrl', function ($scope, Order, Auth) {
  	var user = Auth.getCurrentUser()._id;
  	$scope.details = Order.query({userid:user, orderid});
  });

'use strict';

angular.module('stackStoreApp')
  .controller('OrderHistoryCtrl', function ($scope, Order, Auth) {
   var user = Auth.getCurrentUser()._id;
   $scope.getOrders = function() {
   		Order.query({userid:user}, function(data){
   		$scope.orders = data;
  	 })
   	};
   $scope.getOrders();
});

'use strict';

angular.module('stackStoreApp')
  .controller('UserAccountCtrl', function ($scope, Auth, User, $http, Order) {
  	$scope.email = Auth.getCurrentUser();
  	$scope.userId = Auth.getCurrentUser()._id;
  	$scope.getOrders = function(){
	  		$http.get('/api/orders/user/'+$scope.userId)
	  		.success(function(data){
	  			console.log(data)
	  			$scope.orders = data;
	  		});
	  	};
  });

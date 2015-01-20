'use strict';

angular.module('stackStoreApp')
  .controller('UserAccountCtrl', function ($scope, Auth, User, $http, Order) {
  	$scope.email = Auth.getCurrentUser();
  	$scope.userId = Auth.getCurrentUser()._id;

	$http.get('/api/orders/user/'+$scope.userId)
	.success(function(data){
		console.log(data)
		$scope.orders = data;
	});

	$scope.sumQty = function(array) {
      var total = 0;
      array.forEach(function(product) {
        total += product.quantity;
      })
      return total;
    }

  });

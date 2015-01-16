'use strict';

angular.module('stackStoreApp')
  .controller('CheckoutCtrl', function ($scope, $cookieStore, Order, Auth) {
    $scope.order = $cookieStore.get('cart');
    
    $scope.totalPriceCalculator = function(){
    	$scope.totalPrice = 0
    	$scope.order.forEach(function(item){
    		$scope.totalPrice += (item.product.price * item.qty);
    	})
    	return $scope.totalPrice;
    }
    $scope.placeOrder = function(order){
    	var products = [];
    	order.forEach(function(item){
    		products.push({
    		id: item.product._id,
    		price: item.product.price,
    		quantity: item.qty
    		})
    	})
    	var user = Auth.getCurrentUser()._id;
    	var date = new Date();
    	var totalPrice = $scope.totalPrice;
    	Order.save({_products:products,
    		 _user:user, 
    		 creationDate:date, 
    		 totalPrice: totalPrice}
    		 ,function(){ 
    		 	//Should probably have something
    		 	//diplaying success confirmation for user
    		 	$cookieStore.remove('cart');
    		 	
    		 });
    }

  });

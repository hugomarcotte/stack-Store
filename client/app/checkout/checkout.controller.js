'use strict';

angular.module('stackStoreApp')
  .controller('CheckoutCtrl', function ($scope, $cookieStore, Order, Auth) {
    $scope.order = $cookieStore.get('cart');
    if($scope.order !== undefined && $scope.order.length > 0){
        $scope.validOrder = true;
    }
    $scope.totalPriceCalculator = function(){
    	$scope.totalPrice = 0
    	$scope.order.forEach(function(item){
    		$scope.totalPrice += (item.product.price * item.qty);
    	})
    	return $scope.totalPrice;
    }
    $scope.placeOrder = function(order, stripeId){
    	var randomId = function(){
            return Math.floor((1 + Math.random()) * 0x10000)
                           .toString(16)
                           .substring(1);
        }
        var products = [];
    	order.forEach(function(item){
    		products.push({
    		id: item.product._id,
    		price: item.product.price,
    		quantity: item.qty
    		})
    	})
        if(Auth.isLoggedIn()){
            var user = Auth.getCurrentUser()._id;
        }
    	else {
              var guestUser = randomId() + randomId() + '-' + randomId() + '-' + randomId() + '-' + 
              randomId() + '-' + randomId() + randomId() + randomId();
        }
    	var date = new Date();
    	var totalPrice = $scope.totalPrice;
    	Order.save({_products:products,
    		 _user:user||null,
             guest_user: guestUser||null,
    		 creationDate:date, 
    		 totalPrice: totalPrice,
             stripeId: stripeId
            },function(){ 
    		 	//Should probably have something
    		 	//diplaying success confirmation for user
    		 	$cookieStore.remove('cart');
    		});
    }
    //// test card number is 4242424242424242, enter other info too
    $scope.submitPayment = function(stripe_number, stripe_cvc, exp_month, exp_year){
        $scope.payed = true
        Stripe.card.createToken({
            number: stripe_number,
            cvc: stripe_cvc,
            exp_month: exp_month,
            exp_year: exp_year
        }, function(status, response){
            console.log(status);
            console.log(response);
            $scope.placeOrder($scope.order, response.id)
        })
    }
  });

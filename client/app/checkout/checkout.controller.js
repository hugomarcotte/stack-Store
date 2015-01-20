'use strict';

angular.module('stackStoreApp')
  .controller('CheckoutCtrl', function ($scope, $cookieStore, $http, Order, Auth, CartCookies, Cart, Product, $location) {
    

    $scope.findOrder = function(){
        var cartId = $cookieStore.get('cart');
        $http.get('/api/carts/'+cartId+'/cartView')
            .success(function(data){
                $scope.order = data;
                $scope.validOrder = true;
                $scope.totalPrice = 0;
                $scope.order.products.forEach(function(item){
                    $scope.totalPrice += (item.productId.price * item.qty);
                 })
            })
    };
    $scope.findOrder();

    $scope.placeOrder = function(order, stripeResponse){
    	var randomId = function(){
            return Math.floor((1 + Math.random()) * 0x10000)
                           .toString(16)
                           .substring(1);
        }
        var products = [];
    	order.products.forEach(function(item){
            console.log(item);
    		products.push({
            product: item.productId,
    		id: item.productId._id,
    		price: item.productId.price,
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
             stripeInfo: stripeResponse
            },function(){ 
    		 	//Should probably have something
    		 	//diplaying success confirmation for user
    		 	$cookieStore.remove('cart');
    		});
    }

    // //// test card number is 4242424242424242, enter other info too
    $scope.submitPayment = function(stripe_number, stripe_cvc, exp_month, exp_year){  
        Stripe.card.createToken({
            number: stripe_number,
            cvc: stripe_cvc,
            exp_month: exp_month,
            exp_year: exp_year
        }, function(status, response){
            if(status == 200) {
                $scope.placeOrder($scope.order, response);
                $location.path('/');
                $scope.payed = true
            } else {
                alert('Invalid Credit Card Information!');
            }
        })
    }
  });

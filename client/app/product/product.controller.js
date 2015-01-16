'use strict';

angular.module('stackStoreApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams,Review,User,Auth, Cart) {
    
    $scope.productId = $stateParams.id;

    $http.get('/api/products/'+$scope.productId).success(function(product) {
    	$scope.product = product;
    });

    $scope.checkLogIn = function(){
        if(Auth.isLoggedIn()){
            return true;
        }
        else{
             return false;
        }
    }

    $scope.submitReview = function(productId,reviewText,userId, stars){
    	var user = Auth.getCurrentUser();
    	var newReview ={
    		_product: productId,
            username: user.name,
    		_user:user._id,
    		text: reviewText,
    		stars: stars || null
    	}
    	Review.save(newReview,function(){
    		$scope.getReviews();
    	})
    }
    
    $scope.getReviews=function(){
    	$scope.reviews = Review.getProductReviews({productId: $scope.productId});
    };


    $scope.addToCart = function(product, quantity){
        Cart.addItem(product, quantity)
    }
    $scope.getReviews();

  });

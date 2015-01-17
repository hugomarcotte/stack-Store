'use strict';

angular.module('stackStoreApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams,Review,User,Auth,CartCookies,Product) {
    
    $scope.productId = $stateParams.id;
    $scope.product = Product.get({id:$scope.productId});

    $scope.checkLogIn = function(){
        return Auth.isLoggedIn() ? true : false;
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
        CartCookies.addItem(product, quantity)
    }
    $scope.getReviews();

  });

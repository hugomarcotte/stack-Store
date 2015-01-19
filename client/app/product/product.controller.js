'use strict';

angular.module('stackStoreApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams,Review,User,Auth,CartCookies,Product) {
    
    $scope.productId = $stateParams.id;
    $scope.product = Product.get({id:$scope.productId});

    $scope.checkLogIn = function(){
        return Auth.isLoggedIn() ? true : false;
    }

    $scope.submitReview = function(productId,reviewText, stars){
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
            $scope.reviewText = "";
    	})
    }
    
    $scope.getReviews=function(){
    	$scope.reviews = Review.getProductReviews({productId: $scope.productId});
    };

    $scope.addToCart = function(productId,quantity){
        CartCookies.addToCart(productId,quantity);
    };

    $scope.range = function(min, max, step){
        step = step || 1;
        var input = [];
        for (var i = min; i <= max; i += step) input.push(i);
        return input;
      };
      
    $scope.getReviews();

  });

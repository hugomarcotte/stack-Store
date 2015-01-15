'use strict';

angular.module('stackStoreApp')
  .controller('ProductCtrl', function ($scope, $http, $stateParams,Review,User,Auth) {
    
    $scope.productId = $stateParams.id;

    $http.get('/api/products/'+$scope.productId).success(function(product) {
    	$scope.product = product;
    });

    $scope.submitReview = function(productId,reviewText,userId, stars){
    	var user = Auth.getCurrentUser();
    	var newReview ={
    		_product: productId,
    		_user:user._id,
    		text: reviewText,
    		stars: stars || null
    	}
    	Review.save(newReview,function(){
    		$scope.getReviews();
    	})
    }
    
    $scope.getReviews=function(){
    	$scope.reviews = Review.query();
    };
    $scope.getReviews();

  });

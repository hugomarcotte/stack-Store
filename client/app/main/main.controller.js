'use strict';

angular.module('stackStoreApp')
  .controller('MainCtrl', function ($scope, $http, Cart,CartCookies,Auth) {
    $scope.awesomeThings = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });

    $http.get('/api/categories').success(function(categories){
      $scope.categories = categories;
    });

    $scope.search = function() {
      if($scope.pCategory){
        $http.get('/api/products/search/'+$scope.searchTerm+'/'+$scope.pCategory).success(function(products) {
          $scope.products = products;
        })
      }
      else{
        $http.get('/api/products/search/'+$scope.searchTerm).success(function(products) {
          $scope.products = products;
        })
      }
    };

    $scope.categorySearch = function(cat) {
      $http.get('/api/products/category/'+cat).success(function(products) {
        $scope.pCategory = cat;
        $scope.products = products;
      })
    };

    $scope.addToCart = function(productId){
      CartCookies.addToCart(productId);
    };

  });

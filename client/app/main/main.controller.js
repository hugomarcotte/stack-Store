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

    $scope.searchTerm = {name: '', category: ''};

    $scope.search = function() {
      var name = $scope.searchTerm.name;
      var category = $scope.searchTerm.category;
      var route;

      if(!name) {
        route = '/api/categories/search/'+category;
      } else {
        route = '/api/products/search/'+name+'/'+category;
      }

      $http.get(route)
        .success(function(products) {
        $scope.products = products;
      })

    };

    $scope.addToCart = function(productId){
      CartCookies.addToCart(productId);
    };
  });

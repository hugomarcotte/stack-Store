'use strict';

angular.module('stackStoreApp')
  .controller('MainCtrl', function ($scope, $http, Cart) {
    $scope.awesomeThings = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });

    $http.get('/api/categories').success(function(categories){
      $scope.categories = categories;
    });

    $scope.searchTerm = {name: '', category: ''};

    $scope.addThing = function() {
      if($scope.newThing === '') {
        return;
      }
      $http.post('/api/things', { name: $scope.newThing });
      $scope.newThing = '';
    };

    $scope.deleteThing = function(thing) {
      $http.delete('/api/things/' + thing._id);
    };

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

    $scope.addToCart = function(product){
      console.log("add to cart");
      Cart.addItem(product, 1)
    };
  });

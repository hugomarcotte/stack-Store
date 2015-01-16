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
      var rtName = (!name) ? '' : '/' + name;
      var rtCategory = (!category) ? '' : '/' + category;

      $http.get('/api/products/search'+rtName+rtCategory)
        .success(function(products) {
        $scope.products = products;
      })

    };

    $scope.categorySearch = function(cat) {
      $scope.searchTerm.category = cat
      // $http.get('/api/products/category/'+cat).success(function(products) {
      //   $scope.searchTerm.category = cat;
      //   $scope.products = products;
      // })
    };

    $scope.addToCart = function(product){
      console.log("add to cart");
      Cart.addItem(product, 1)
    };

  });

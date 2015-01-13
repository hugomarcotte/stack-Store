'use strict';

angular.module('stackStoreApp')
  .controller('MainCtrl', function ($scope, $http) {
    $scope.awesomeThings = [];

    $http.get('/api/products').success(function(products) {
      $scope.products = products;
    });

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
      $http.get('/api/products/search/'+$scope.searchTerm).success(function(products) {
        console.log(products);
        $scope.products = products;
      })
    };

  });

'use strict';

angular.module('stackStoreApp')
  .controller('AdminCtrl', function ($scope, $http, Auth, User) {

    // Use the User $resource to fetch all users
    $scope.users = User.query();

    $scope.deleteUser = function(user) {
      User.remove({ id: user._id });
      angular.forEach($scope.users, function(u, i) {
        if (u === user) {
          $scope.users.splice(i, 1);
        }
      });
    };

    $http.get('/api/products').success(function(products){
      $scope.products = products;
    });

    $scope.deleteProduct = function(product) {
      $http.delete('/api/products/'+product._id);
      $scope.products.forEach(function(prod,i){
        if(prod === product){
          $scope.products.splice(i,1);
        }
      })
    };


    
  });

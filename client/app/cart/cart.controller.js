'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, Cart, $cookieStore) {
    $scope.message = 'Hello';
    $scope.order = Cart.getCart();

    $scope.removeItem = function(product) {
      Cart.removeItem(product);
      $scope.order = Cart.getCart();
    };

  });

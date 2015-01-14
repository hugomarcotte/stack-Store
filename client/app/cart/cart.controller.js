'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, order) {
    $scope.message = 'Hello';
    $scope.order = order.currentOrder;

  });

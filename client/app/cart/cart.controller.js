'use strict';

angular.module('stackStoreApp')
  .controller('CartCtrl', function ($scope, order) {
    $scope.message = 'Hello';
    order.getCurrentOrder()
    $scope.order = order.currentOrder;
  });

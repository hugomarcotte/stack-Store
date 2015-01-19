'use strict';

angular.module('stackStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orderDetails', {
        url: '/orderDetails',
        templateUrl: 'app/orderDetails/orderDetails.html',
        controller: 'OrderDetailsCtrl'
      });
  });
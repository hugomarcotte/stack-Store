'use strict';

angular.module('stackStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orderHistory', {
        url: '/orderHistory',
        templateUrl: 'app/orderHistory/orderHistory.html',
        controller: 'OrderHistoryCtrl'
      });
  });
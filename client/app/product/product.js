'use strict';

angular.module('stackStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('product', {
        url: '/product/{id}',
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      });
  });
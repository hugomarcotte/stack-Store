'use strict';

angular.module('stackStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('cart', {
        url: '/cart',
        templateUrl: 'app/cart/cart.html',
        controller: 'CartCtrl'
        // resolve: {
        // 	orderPromise: function(order){
        // 		return order.getCurrentOrder();
        // 	}
        // }
      });
  });
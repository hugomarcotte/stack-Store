'use strict';

angular.module('stackStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('promotions', {
        url: '/promotions',
        templateUrl: 'app/promotions/promotions.html',
        controller: 'PromotionsCtrl'
      });
  });
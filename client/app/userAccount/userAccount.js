'use strict';

angular.module('stackStoreApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('userAccount', {
        url: '/userAccount',
        templateUrl: 'app/userAccount/userAccount.html',
        controller: 'UserAccountCtrl'
      });
  });
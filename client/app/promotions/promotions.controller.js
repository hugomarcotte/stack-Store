'use strict';

angular.module('stackStoreApp')
  .controller('PromotionsCtrl', function ($scope, promotions) {
 	$scope.promotions = promotions.query();
  });

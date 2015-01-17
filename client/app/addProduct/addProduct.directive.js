'use strict';

angular.module('stackStoreApp')
  .directive('addProduct', function () {
    return {
      templateUrl: 'app/addProduct/addProduct.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
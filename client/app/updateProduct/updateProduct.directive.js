'use strict';

angular.module('stackStoreApp')
  .directive('updateProduct', function () {
    return {
      templateUrl: 'app/updateProduct/updateProduct.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
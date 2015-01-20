'use strict';

angular.module('stackStoreApp')
  .directive('orderView', function () {
    return {
      templateUrl: 'app/orderView/orderView.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
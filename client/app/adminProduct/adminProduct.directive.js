'use strict';

angular.module('stackStoreApp')
  .directive('adminproduct', function () {
    return {
      templateUrl: 'app/adminproduct/adminproduct.html',
      restrict: 'EA',
      scope: {
      	product: '='
      },
      link: function (scope, element, attrs) {
      	
      }
    };
  });
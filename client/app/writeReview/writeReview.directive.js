'use strict';

angular.module('stackStoreApp')
  .directive('writeReview', function () {
    return {
      templateUrl: 'app/writeReview/writeReview.html',
      restrict: 'EA',
      link: function (scope, element, attrs) {
      }
    };
  });
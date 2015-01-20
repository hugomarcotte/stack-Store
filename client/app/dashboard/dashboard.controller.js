'use strict';

angular.module('stackStoreApp')
  .controller('DashboardCtrl', function ($scope, $location, Auth, Analytic) {

    if(!Auth.isAdmin()) {
      $location.path('/');
    }

    var analytics;
    Analytic.query(function(results) {
      analytics = results;

      analytics = analytics.sort(function(a, b) {
        if(a.date > b.date) {
          return -1;
        }
        else {
          return 1;
        }
      });

      console.log(analytics[0].page);
      var pageHits = [];
      for (var property in analytics[0].page) {
        console.log(property);
        if (analytics[0].page.hasOwnProperty(property)) {
          pageHits.push({'page': property, 'hits':analytics[0].page[property]});
        }
      }

      $scope.stats = pageHits;

    });







  });

'use strict';

angular.module('stackStoreApp')
  .controller('DashboardCtrl', function ($scope, $location, Auth, Analytic) {

    if(!Auth.isAdmin()) {
      $location.path('/');
    }

    Analytic.query(function(results) {
      results.forEach(function(obj){
        obj.date = new Date(obj.date) //silly mongo
      })
      
      $scope.stats = results;
      console.log($scope.stats)

    });

    $scope.sortByDate = function(date){
      
    }


  });

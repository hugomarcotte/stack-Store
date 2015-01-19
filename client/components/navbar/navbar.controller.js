'use strict';

angular.module('stackStoreApp')
  .controller('NavbarCtrl', function ($scope, $location, Auth, $cookieStore) {
    $scope.menu = [{
      'title': 'Home',
      'link': '/'
    }];

    $scope.isCollapsed = true;
    $scope.isLoggedIn = Auth.isLoggedIn;
    $scope.isAdmin = Auth.isAdmin;
    $scope.getCurrentUser = Auth.getCurrentUser;

    $scope.logout = function() {
      Auth.logout();
      $location.path('/login');
      $cookieStore.remove('cart');
    };

    $scope.isActive = function(route) {
      return route === $location.path();
    };
  });
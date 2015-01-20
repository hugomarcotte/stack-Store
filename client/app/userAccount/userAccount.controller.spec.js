'use strict';

describe('Controller: UserAccountCtrl', function () {

  // load the controller's module
  beforeEach(module('stackStoreApp'));

  var UserAccountCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UserAccountCtrl = $controller('UserAccountCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

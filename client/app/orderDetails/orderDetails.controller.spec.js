'use strict';

describe('Controller: OrderDetailsCtrl', function () {

  // load the controller's module
  beforeEach(module('stackStoreApp'));

  var OrderDetailsCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    OrderDetailsCtrl = $controller('OrderDetailsCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});

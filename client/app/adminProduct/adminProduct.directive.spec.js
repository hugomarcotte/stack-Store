'use strict';

describe('Directive: adminProduct', function () {

  // load the directive's module and view
  beforeEach(module('stackStoreApp'));
  beforeEach(module('app/adminProduct/adminProduct.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<admin-product></admin-product>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the adminProduct directive');
  }));
});
'use strict';

describe('Directive: addProduct', function () {

  // load the directive's module and view
  beforeEach(module('stackStoreApp'));
  beforeEach(module('app/addProduct/addProduct.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<add-product></add-product>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the addProduct directive');
  }));
});
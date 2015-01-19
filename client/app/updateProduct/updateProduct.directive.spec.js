'use strict';

describe('Directive: updateProduct', function () {

  // load the directive's module and view
  beforeEach(module('stackStoreApp'));
  beforeEach(module('app/updateProduct/updateProduct.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<update-product></update-product>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the updateProduct directive');
  }));
});
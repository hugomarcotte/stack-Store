'use strict';

describe('Directive: writeReview', function () {

  // load the directive's module and view
  beforeEach(module('stackStoreApp'));
  beforeEach(module('app/writeReview/writeReview.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<write-review></write-review>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the writeReview directive');
  }));
});
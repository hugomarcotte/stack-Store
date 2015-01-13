'use strict';

describe('Service: editProduct', function () {

  // load the service's module
  beforeEach(module('stackStoreApp'));

  // instantiate service
  var editProduct;
  beforeEach(inject(function (_editProduct_) {
    editProduct = _editProduct_;
  }));

  it('should do something', function () {
    expect(!!editProduct).toBe(true);
  });

});

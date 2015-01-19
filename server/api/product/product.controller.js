'use strict';

var _ = require('lodash');
var Filepicker = require('filepicker');
var filepicker = new Filepicker('AN7AnbQhRSAeOf7vYBLeBz');
var Product = require('./product.model');

// Get list of products
exports.index = function(req, res) {
  Product.find(function (err, products) {
    products.forEach(function(prod){
      prod.convertMoney();
    })
    if(err) { return handleError(res, err); }
    return res.json(200, products);
  });
};
// Get a single product
exports.show = function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    product.convertMoney();
    if(err) { return handleError(res, err); }
    if(!product) { return res.send(404); }
    return res.json(product);
  });
};

exports.search = function(req, res) {
  var name = req.params.name;
  var category = req.params.category;
  if(!category) {
    Product
    .nameSearch(name)
    .exec(function(err, products) {
    return res.json(products);
    })
  } else {
    Product
    .nameSearch(name)
    .where('category', category)
    .exec(function(err, products) {
    return res.json(products);
    })
  }
    
}

// Creates a new product in the DB.
exports.create = function(req, res) {
  Product.create(req.body, function(err, product) {
    product.convertMoney();
    if(err) { return handleError(res, err); }
    return res.json(201, product);
  });
};

// Updates an existing product in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Product.findById(req.params.id, function (err, product) {
    if (err) { return handleError(res, err); }
    if(!product) { return res.send(404); }
    var updated = _.merge(product, req.body);
    updated.convertMoney();
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, product);
    });
  });
};

// Deletes a product from the DB.
exports.destroy = function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) { return handleError(res, err); }
    if(!product) { return res.send(404); }
    product.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
'use strict';

var _ = require('lodash');
var Product = require('./product.model');

// Get list of products
exports.index = function(req, res) {
  Product.find(function (err, products) {
    if(err) { return handleError(res, err); }
    return res.json(200, products);
  });
};
// Get a single product
exports.show = function(req, res) {
  Product.findById(req.params.id, function (err, product) {
    if(err) { return handleError(res, err); }
    if(!product) { return res.send(404); }
    console.log(product);
    return res.json(product);
  });
};
///Searches for products by name
exports.searchTerm = function(req, res) {
  var name = req.params.searchTerm;
  Product.find({name: {$regex: name, $options:"$i"}}, function (err, products) {
    if(err) { return handleError(res, err); }
    return res.json(200, products);
  })
};
/// Searches for products by category
exports.searchCat = function(req, res) {
  var cat = req.params.searchCat;
  Product.find({category: {$regex: cat, $options:"$i"}}, function (err, products) {
    if(err) { return handleError(res, err); }
    return res.json(200, products);
  })
};
//// Search for products within a category
exports.searchByCat = function(req, res){
  var name = req.params.searchTerm;
  var cat = req.params.searchCat;
  Product.find({name: {$regex: name, $options:"$i"}, category: cat}, function (err, products) {
    if(err) { return handleError(res, err); }
    return res.json(200, products);
  })
}

// Creates a new product in the DB.
exports.create = function(req, res) {
  Product.create(req.body, function(err, product) {
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
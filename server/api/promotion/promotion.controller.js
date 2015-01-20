'use strict';

var _ = require('lodash');
var Promotion = require('./promotion.model');

// Get list of promotions
exports.index = function(req, res) {
  Promotion.find(function (err, promotions) {
    if(err) { return handleError(res, err); }
    return res.json(200, promotions);
  });
};

// Get a single promotion
exports.show = function(req, res) {
  Promotion.findById(req.params.id, function (err, promotion) {
    if(err) { return handleError(res, err); }
    if(!promotion) { return res.send(404); }
    return res.json(promotion);
  });
};

// Creates a new promotion in the DB.
exports.create = function(req, res) {
  Promotion.create(req.body, function(err, promotion) {
    if(err) { return handleError(res, err); }
    return res.json(201, promotion);
  });
};

// Updates an existing promotion in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Promotion.findById(req.params.id, function (err, promotion) {
    if (err) { return handleError(res, err); }
    if(!promotion) { return res.send(404); }
    var updated = _.merge(promotion, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, promotion);
    });
  });
};

// Deletes a promotion from the DB.
exports.destroy = function(req, res) {
  Promotion.findById(req.params.id, function (err, promotion) {
    if(err) { return handleError(res, err); }
    if(!promotion) { return res.send(404); }
    promotion.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
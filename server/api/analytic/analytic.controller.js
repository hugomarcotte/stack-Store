'use strict';

var _ = require('lodash');
var Analytic = require('./analytic.model');

// Get list of analytics
exports.index = function(req, res) {
  Analytic.find(function (err, analytics) {
    if(err) { return handleError(res, err); }
    return res.json(200, analytics);
  });
};

// Get a single analytic
exports.show = function(req, res) {
  Analytic.findById(req.params.id, function (err, analytic) {
    if(err) { return handleError(res, err); }
    if(!analytic) { return res.send(404); }
    return res.json(analytic);
  });
};

// Creates a new analytic in the DB.
exports.create = function(req, res) {
  var ping = JSON.parse(req.body.json);
  if(Object.keys(ping).length){
    Analytic.create({page:ping}, function(err, analytic) {
    if(err) { console.log(err); return handleError(res, err); }
    return res.json(201, analytic);
  })} 
  else{
    res.status(200).send();
  }
};

// Updates an existing analytic in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Analytic.findById(req.params.id, function (err, analytic) {
    if (err) { return handleError(res, err); }
    if(!analytic) { return res.send(404); }
    var updated = _.merge(analytic, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, analytic);
    });
  });
};

// Deletes a analytic from the DB.
exports.destroy = function(req, res) {
  Analytic.findById(req.params.id, function (err, analytic) {
    if(err) { return handleError(res, err); }
    if(!analytic) { return res.send(404); }
    analytic.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
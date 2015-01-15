'use strict';

var _ = require('lodash');
var Order = require('./order.model');

// Get list of orders
exports.index = function(req, res) {
  Order.find(function (err, orders) {
    if(err) { return handleError(res, err); }
    return res.json(200, orders);
  });
};

// Get a single order
exports.show = function(req, res) {
  Order.findById(req.params.id, function (err, order) {
    if(err) { return handleError(res, err); }
    if(!order) { return res.send(404); }
    return res.json(order);
  });
};
///get an active cart for the current user
exports.userCurOrder = function(req, res){
  var user = req.params.userId
  Order.find({_user:user, completed: false})
    .populate('_products')
    .exec(function (err, order) {
      if(err) { return handleError(res, err); }
      if(!order) { return res.send(404); }
      console.log(order);
      return res.json(200, order);  
    });
}
// Creates a new order in the DB.
exports.create = function(req, res) {
  Order.create(req.body, function(err, order) {
    if(err) { return handleError(res, err); }
    return res.json(201, order);
  });
};

// Updates an existing order in the DB.
// exports.update = function(req, res) {
//   console.log("req.body")
//   console.log(req.body)
//   if(req.body._id) { delete req.body._id; }
//   Order.findById(req.params.id, function (err, order) {
//     if (err) { return handleError(res, err); }
//     if(!order) { return res.send(404); }

//     var updated = _.merge(order, req.body);
//     updated.save(function (err) {
//       if (err) { return handleError(res, err); }
//       console.log(order)
//       return res.json(200, order);
//     });
//   });
// };

// Updates an existing order in the DB.
exports.update = function(req, res) {
  //if(req.body._id) { delete req.body._id; }
  Order.findById(req.params.id, function (err, order) {
    if (err) { return handleError(res, err); }
    if(!order) { return res.send(404); }
    order._products.push(req.body)
    order.save(function (err) {
      if (err) { return handleError(res, err); }
      console.log(order)
      return res.json(200, order);
    });
  });
};

// Deletes a order from the DB.
exports.destroy = function(req, res) {
  Order.findById(req.params.id, function (err, order) {
    if(err) { return handleError(res, err); }
    if(!order) { return res.send(404); }
    order.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}
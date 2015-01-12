'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ProductSchema = new Schema({
  name: String,
  price: Number,
  description: String,
  category: String,
  review: [],
  qty: Number,
  active: {type: Boolean, default: true}
});

module.exports = mongoose.model('Product', ProductSchema);

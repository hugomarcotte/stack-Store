'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ReviewSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  _product: {type: Schema.Types.ObjectId, ref: 'Product'},
  stars: Number,
  text: String
});

module.exports = mongoose.model('Review', ReviewSchema);
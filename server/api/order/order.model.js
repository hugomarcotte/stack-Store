'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var OrderSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User', required: true}, // Link to user
  _products: [{ productID:{ type: Schema.Types.ObjectId, ref: 'Product' }, cartQty: Number}],
  completed: { type: Boolean, default: false} // True means order completed, false = cart
  creationDate: {type:Date, default: Date.now() },
  completionDate: Date
});

module.exports = mongoose.model('Order', OrderSchema);

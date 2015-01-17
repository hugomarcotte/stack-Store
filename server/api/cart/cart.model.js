'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  userId: {type: String, required: true} ,
  products: [{type: Schema.Types.ObjectId, ref: 'Product'}], //productId references, in case prices change
  submitted: {type: Boolean, default: false}
});








module.exports = mongoose.model('Cart', CartSchema);
'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CartSchema = new Schema({
  userId: {type: String, required: true} ,
  products: [{
  	productId: {type: Schema.Types.ObjectId, ref: 'Product'},
  	qty: {type: Number,default:1}
  }],
  // products: [{type: Schema.Types.ObjectId, ref: 'Product',qty:{type:Number}}], //productId references, in case prices change
  submitted: {type: Boolean, default: false}
});








module.exports = mongoose.model('Cart', CartSchema);
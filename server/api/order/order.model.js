'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var Product = require('../product/product.model');

var OrderSchema = new Schema({
  _user: { type: Schema.Types.ObjectId, ref: 'User', required: true}, // Link to user
  _products: [],
  creationDate: {type:Date, default: Date.now() },
  totalPrice: Number
});

OrderSchema.pre('save', function(next){
	if(!this.isNew) return next();
	else{
		var productsInOrder = this._products;
		productsInOrder.forEach(function(product){
			Product.findOne({_id:product.id},function(err,prod){
				prod.updateQuantity(product.quantity);
			});
		});
		next();
	}
});

module.exports = mongoose.model('Order', OrderSchema);

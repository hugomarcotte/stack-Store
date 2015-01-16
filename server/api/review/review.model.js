'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('../product/product.model');

var ReviewSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User'},
  username: String,
  _product: {type: Schema.Types.ObjectId, ref: 'Product'},
  stars: Number,
  text: String
});

ReviewSchema.pre('save', function(next){
	if(!this.isNew) return next();
	else {
		var review = this;
		Product.findOne({ _id: this._product }, function(err, product) {
			product.addReview(review._product, review._id);
			next();
		});
	}
})
module.exports = mongoose.model('Review', ReviewSchema);
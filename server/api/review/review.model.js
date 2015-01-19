'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Product = require('../product/product.model');

function validator(v){
	return v.length > 10;
};

var ReviewSchema = new Schema({
  _user: {type: Schema.Types.ObjectId, ref: 'User', required: true},
  username: String,
  _product: {type: Schema.Types.ObjectId, ref: 'Product', required:true},
  stars: Number,
  text: {type: String, validate:[validator, 'my error type']},
  date: {type: Date, default: Date.now}
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

ReviewSchema.methods.getProductReview = function(productId){
	ReviewSchema.find({_product:productId})
}



module.exports = mongoose.model('Review', ReviewSchema);
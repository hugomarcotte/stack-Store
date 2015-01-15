'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: {type:String,required:true},
	price: {type:Number,required:true},
	description: String,
	category: {type:Array,default:["Misc"]},
	review: [{type: Schema.Types.ObjectId, ref: 'Review'}],
	qty: {type:Number,default:0},
	available: {type: Boolean, default: true},
	image: {type: String, default: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"}
});

ProductSchema.methods.addReview = function(productId, reviewId){
	this.review.addToSet(reviewId);
	this.save(function(err, product) {
		
	});
}
module.exports = mongoose.model('Product', ProductSchema);

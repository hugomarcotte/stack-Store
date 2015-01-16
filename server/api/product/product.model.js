'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: {type:String,required:true, unique: true},
	price: {type:Number,required:true},
	description: {type:String, required: true},
	category: {type:Array,default:["Misc"]},
	review: [{type: Schema.Types.ObjectId, ref: 'Review'}],
	qty: {type:Number,default:0},
	available: {type: Boolean, default: true},
	image: {type: String, default: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"}
});

ProductSchema.methods.addReview = function(productId, reviewId){
	this.review.push(reviewId);
	this.save();
}
module.exports = mongoose.model('Product', ProductSchema);

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


ProductSchema.statics.nameSearch = function(name) {
    return this.find({name: {$regex: name, $options:"$i"}});
};

ProductSchema.statics.categorySearch = function(category) {
    return this.find({category: {$regex: category, $options:"$i"}});
};

ProductSchema.methods.addReview = function(productId, reviewId){
	this.review.push(reviewId);
	this.save();
};

ProductSchema.methods.convertMoney = function(){
	if(this.price.toString().indexOf('.')===-1){
		this.price = this.price/100;	
	} else {
		this.price = this.price*100;
	}
	return this;
}

ProductSchema.methods.updateQuantity = function(quantity){
	this.qty -= quantity;
	this.save();
}
>>>>>>> master
module.exports = mongoose.model('Product', ProductSchema);

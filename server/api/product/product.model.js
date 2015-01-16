'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: {type:String,required:true},
	price: {type:Number,required:true},
	description: String,
	category: {type:Array,default:["Misc"]},
	review: [],
	qty: {type:Number,default:0},
	available: {type: Boolean, default: true},
	image: {type: String, default: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"}
});

ProductSchema.statics.nameSearch = function(name, cb) {
    return this.find({name: {$regex: name, $options:"$i"}}, cb);
};

ProductSchema.statics.categorySearch = function(cat, cb) {
    return this.where('category', {$regex: cat, $options:"$i"}, cb);
};

module.exports = mongoose.model('Product', ProductSchema);

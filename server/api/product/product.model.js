'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	price: Number,
	description: String,
	category: String,
	review: [],
	qty: Number,
	active: {type: Boolean, default: true},
	image: {type: String, default: "http://underwrapsfitness.com.au/wp-content/uploads/2013/10/NEwProductComingSoon.jpg"}
});

module.exports = mongoose.model('Product', ProductSchema);

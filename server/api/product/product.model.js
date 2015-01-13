'use strict';

var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var ProductSchema = new Schema({
	name: String,
	price: Number,
	description: String,
	category: [],
	review: [],
	qty: Number,
	active: {type: Boolean, default: true},
	image: String
});

module.exports = mongoose.model('Product', ProductSchema);

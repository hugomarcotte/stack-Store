'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var CategorySchema = new Schema({
  name: {type:String,required:true}
});

CategorySchema.statics.categorySearch = function(cat) {
	return this.find({category: {$regex: cat, $options:"$i"}});
}

module.exports = mongoose.model('Category', CategorySchema);
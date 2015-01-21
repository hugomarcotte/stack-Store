'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var PromotionSchema = new Schema({
  code: String,
  startDate: {type:Date, default: Date.now},
  endDate: {type:Date, required: true},
  percentOff: Number,
  active: {type:Boolean, default: true}
});

PromotionSchema.virtual('isActive').get(function() {
  if(this.startDate <= Date.now() && this.endDate >= Date.now()){
    return true;
  }
  return false;
});

PromotionSchema.statics.findCode = function(code){
  return this.findOne({code:code});
}



module.exports = mongoose.model('Promotion', PromotionSchema);

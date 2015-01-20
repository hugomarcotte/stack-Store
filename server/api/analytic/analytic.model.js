'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var AnalyticSchema = new Schema({
  page: {},
  numHits: Number,
  date: {type: Date, default: Date.now}
});

module.exports = mongoose.model('Analytic', AnalyticSchema);

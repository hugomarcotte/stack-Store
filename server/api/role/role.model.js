'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoleSchema = new Schema({
  role: String
});

module.exports = mongoose.model('Role', RoleSchema);
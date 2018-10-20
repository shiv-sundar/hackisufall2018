'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blockSchema = new Schema({
	hash: {
		type: String,
		required: 'HASH MFER'
	},
	prev_hash: {
		type: String,
		required: 'BRUH!'
	},
  	from: {
    	type: String,
    	default: 'null'
  	},
  	time_received: {
    	type: Date,
    	default: Date.now
  	},
  	meta-data: {
		type: Object,
		default: 'null'
	}
});

var blockSchema = mongoose.model('blockSchema', blockSchema);

module.exports = {
  blockSchema: blockSchema
};

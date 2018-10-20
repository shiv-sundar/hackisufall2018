'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blockSchema = new Schema({
	hash: {
		type: String,
		default: 'null'
	},
	prev_hash: {
		type: String,
		default: 'null'
	},
  	from: {
    	type: String,
    	default: 'null'
  	},
  	time_received: {
    	type: Date,
    	default: Date.now
  	},
  	meta_data: {
		type: Object,
		default: 'null'
	}
});

var blockSchema = mongoose.model('blockSchema', blockSchema);

module.exports = {
  blockSchema: blockSchema
};

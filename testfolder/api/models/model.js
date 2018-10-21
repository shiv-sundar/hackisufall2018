'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var blockSchema = new Schema({
	block_type: {
		type: String,
		required: 'null'
	},
	hash: {
		type: String,
		default: 'null'
	},
	prev_hash: {
		type: String,
		default: 'null'
	},
	barcodes: {
		type: String,
		required: 'null'
	},
  	from: {
    	type: String,
    	required: 'null'
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

module.exports = mongoose.model('blockSchema', blockSchema);

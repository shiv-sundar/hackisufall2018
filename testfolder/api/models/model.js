'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sourceSchema = new Schema({
  blockType: {
    type: String,
    default: 'source'
  },
  name: {
    type: String,
    required: 'name of source'
  },
  loc: {
    type: String,
    required: 'location'
  },
  crop_type: {
    type: String,
    required: 'crop type'
  },
  barcodes: [String],
  time_left: {
    type: Date,
    default: Date.now
  },
  hash: {
    type: String,
    default: "123456789"
  }
});

var storageSchema = new Schema({
  blockType: {
    type: String,
    default: 'storage'
  },
  name: {
    type: String,
    required: 'name of facility'
  },
  from: {
    type: String,
    default: 'null'
  },
  barcodes: {
  	type: Map,	  
  	of: String
  },
  time_received: {
    type: Date,
    default: Date.now
  },
  loc: {
    type: String,
    required: 'location'
  },
  type_of_storage: {
    type: String,
    required: 'type of storage'
  },
  prev_hash: {
    type: String,
    default: 'null'
  }
});

var transportSchema = new Schema({
  blockType: {
    type: String,
    default: 'transport'
  },
  name: {
    type: String,
    required: 'name of shipping line'
  },
  from: {
    type: String,
    default: 'null'
  },
  barcodes: {
  	type: Map,	  
  	of: String
  },
  time_received: {
    type: Date,
    default: Date.now
  },
  type_of_storage: {
    type: [{
      type: String,
      enum: ['normal', 'frozen', 'refrigerated']
    }],
    default: ['normal']
  },
  prev_hash: {
    type: String,
    default: 'null'
  }
});

var endpointSchema = new Schema({
  blockType: {
    type: String,
    default: 'endpoint'
  },
  name: {
    type: String,
    required: 'name of shipping line'
  },
  from: {
    type: String,
    default: 'null'
  },
  barcode: {
    type: String,
    required: 'barcode'
  },
  time_received: {
    type: Date,
    default: Date.now
  },
  loc: {
    type: String,
    required: 'location'
  },
  prev_hash: {
    type: String,
    default: 'null'
  }
});

var Source = mongoose.model('Source', sourceSchema);
var Endpoint = mongoose.model('Endpoint', endpointSchema);
var Transport = mongoose.model('Transport', transportSchema);
var Storage1 = mongoose.model('Storage1', storageSchema);

module.exports = {
  Source: Source,
  Endpoint: Endpoint,
  Transport: Transport,
  Storage1: Storage1
};

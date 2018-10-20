'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sourceSchema = new Schema({
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
  }
});

var storageSchema = new Schema({
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
  }
});

var transportSchema = new Schema({
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
  }
});

var endpointSchema = new Schema({
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
  }
});

var Source = mongoose.model('Source', sourceSchema);
var Endpoint = mongoose.model('Endpoint', endpointSchema);
var Transport = mongoose.model('Transport', transportSchema);
var Storage = mongoose.model('Storage', storageSchema);

module.exports = {
  Source: Source,
  Endpoint: Endpoint,
  Transport: Transport,
  Storage: Storage
};

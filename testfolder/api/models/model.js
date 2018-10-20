'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var sourceSchema = new Schema({
  name: {
    type: String,
    required: 'name of source'
  },
  location: {
    type: String,
    required: 'location'
  },
  crop_type: {
    type: String,
    required: 'crop type'
  },
  amount: {
    type: String,
    required: 'amount'
  },
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
  amount: {
    type: String,
    required: 'amount'
  },
  time_received: {
    type: Date,
    default: Date.now
  },
  location: {
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
  amount: {
    type: String,
    required: 'amount'
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
  amount: {
    type: String,
    required: 'amount'
  },
  time_received: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('test', sourceSchema);
'use strict';

var mongoose = require('mongoose'),
  Source = mongoose.model('Source'),
  Endpoint = mongoose.model('Endpoint'),
  Transport = mongoose.model('Transport'),
  Storage1 = mongoose.model('Storage1');

//change to return correct JSON array
exports.listChain = function(req, res) {
	console.log("Searching for barcode: " + req.query.barcode);
	
	Source.find({ barcodes : req.query.barcode  }, function(err, ret){
		if(err)
			res.send(err);
		res.json(ret);
	});
};

exports.listEndpoints = function(req, res) {
  Endpoint.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listStorages = function(req, res) {
  Storage1.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listTransports = function(req, res) {
  Transport.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listSources = function(req, res) {
  Source.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.create_a_transportationBlock = function(req, res) {
	var newTransport = new Transport(req.body);
	newTransport.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.create_a_storageBlock = function(req, res) {
	var newStorage = new Storage(req.body);
	newStorage.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.create_an_endpointBlock = function(req, res) {
	var newEndpoint = new Endpoint(req.body);
	newEndpoint.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

exports.create_a_sourceBlock = function(req, res) {
	var newSource = new Source(req.body);
	newSource.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

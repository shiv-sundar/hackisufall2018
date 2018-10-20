'use strict';

var mongoose = require('mongoose'),
  Source = mongoose.model('Source'),
  Endpoint = mongoose.model('Endpoint'),
  Transport = mongoose.model('Transport'),
  Storage = mongoose.model('Storage');

//change to return correct JSON array
exports.listEndpoint = function(req, res) {
  Endpoint.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listStorage = function(req, res) {
  Storage.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listTransport = function(req, res) {
  Transport.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listSource = function(req, res) {
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

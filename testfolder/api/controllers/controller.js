'use strict';

var mongoose = require('mongoose'),
  Source = mongoose.model('Source');

//change to return correct JSON array
exports.listChain = function(req, res) {
	console.log("Searching for barcode: " + req.query.barcode);
	
	Source.find({ barcodes : req.query.barcode  }, function(err, ret){
		if(err)
			res.send(err);
		res.json(ret);
	});
};

//exports.create_a_transportationBlock

//exports.create_a_storageBlock

//exports.create_an_endpointBlock

exports.create_a_sourceBlock = function(req, res) {
	var newSource = new Source(req.body);
	newSource.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};

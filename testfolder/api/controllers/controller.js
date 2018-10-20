'use strict';

var mongoose = require('mongoose'),
  blockSchema = mongoose.model('blockSchema');
//change to return correct JSON array
exports.listChain = function(req, res) {
	console.log("Searching for barcode: " + req.query.barcode);
	
	Source.find({ barcodes : req.query.barcode  }, function(err, ret){
		if(err)
			res.send(err);
		res.json(ret);
	});
};

exports.create_a_block = function(req, res) {
	var newBlock = new blockSchema(req.body);
	newTransport.save(function(err, task){
		if(err)
			res.send(err);
		res.json(task);
	});
};
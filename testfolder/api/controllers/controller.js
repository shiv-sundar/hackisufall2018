'use strict';

var mongoose = require('mongoose'),
  blockSchema = mongoose.model('blockSchema'),
  cryptoJS = require('crypto-js');

function hashBlock(block){
	return cryptoJS.SHA256(block.previous_hash + block.time_received + block.meta_data + block.from);
}

//change to return correct JSON array
exports.listChain = function(req, res) {
	console.log("Searching for barcode: " + req.query.barcode);
	blockSchema.find({barcodes : req.query.barcode}, function(err, ret) {
		if(err)
			res.send(err);
		res.json(ret);
	});
};


function findBarcode(barcode) {
	console.log("Searching for barcode: " + barcode);
	blockSchema.find({barcodes : barcode}, function(err, ret) {
		if(err)
			console.log(err);
		return ret;
	});
};

exports.create_a_block = function(req, res) {
	var newBlock = new blockSchema(req.body);
	
	var relatedBlocks = findBarcode(req.body.barcodes);

	var mostRecentTime = new Date(0);
	var mostRecentBlock;

	if (relatedBlocks == null) {
		newBlock.hash = "1234567890";
		newBlock.previous_hash = "0";
	} else {
		for(block in relatedBlocks){
			if(block.time_received > mostRecentTime){
				mostRecentTime = block.time_received;
				mostRecentBlock = block;
			}
		}
		newBlock.previous_hash = mostRecentBlock.hash;
		newBlock.hash = hashBlock(newBlock);
	}



	newBlock.save(function(err, task) {
		if(err)
			res.send(err);
		res.json(task);
	});
};


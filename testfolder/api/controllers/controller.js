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
	console.log(newBlock.barcode + newBlock.time_received);
	if(newBlock.block_type == "source") {
		newBlock.prev_hash = "1234567890";
		newBlock.hash = cryptoJS.SHA256(newBlock.previous_hash + newBlock.time_received + newBlock.meta_data + newBlock.from);
	
		newBlock.save(function(err, task){
			if(err)
				res.send(err);
			res.json(task);
		});
	}

	else {
		var relatedBlocks = blockSchema.find({barcodes : newBlock.barcodes}, function(err, ret) {
			if (err) {
				res.send(err);
			}
	
			else {
				var mostRecentTime = new Date(0);
				var mostRecentBlock = "";
				for(var block in relatedBlocks) {
					if(block.time_received > mostRecentTime) {
						mostRecentTime = block.time_received;
						mostRecentBlock = block;
					}
				}
	
				newBlock.prev_hash = mostRecentBlock.hash + "";
				newBlock.hash = cryptoJS.SHA256(newBlock.previous_hash + newBlock.time_received + newBlock.meta_data + newBlock.from) + "";
				console.log("Hash: " + newBlock.hash + ", Prev_Hash: " + newBlock.prev_hash);
				newBlock.save(function(err, task) {
					if(err)
						res.send(err);
					res.json(task);
				});
			}
		});
	}
	
};


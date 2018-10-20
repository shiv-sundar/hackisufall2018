'use strict';

var express = require("express");
var bodyParser = require("body-parser");
var cryptoJS = require("crypto-js");

class Block {
	constructor(previousHash, height, data, hash){
		this.previousHash = previousHash;
		this.height = height;
		this.data = data;
		this.hash = hash;
	}
}

//TODO add support for branches
var blockchain = [];

var hashBlock = (previousHash, height, data) => {
	return cryptoJS.SHA256(previousHash +  height +  data).toString();
};

function generateNewBlock(req, res){
	//TODO validate data
	var data = req.body;

	if(blockchain.length == 0){
		var newHash = hashBlock(1234567890, 0, data);
		var newBlock = new Block(1234567890, 0, data, newHash);
	} else {
		var lastBlock = blockchain[blockchain.length - 1];
	
		var newHash = hashBlock(lastBlock.previousHash, lastBlock.height + 1, data);
		var newBlock = new Block(lastBlock.hash, lastBlock.height + 1, data, newHash);
	}


	//TODO validate new Block
	
	blockchain.push(newBlock);

	res.send("New Block added");
};

var initServer = () => {
	var app = express();
	app.use(bodyParser.json());
	
	app.get("/blockchain", function(req, res) {
		res.send(blockchain);
	});

	app.post("/addBlock", function(req, res) {
		generateNewBlock(req, res);
	});

	app.listen(8080);
};

initServer();

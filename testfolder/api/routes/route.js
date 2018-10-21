'use strict';

module.exports = function(app) {
  	var blockchain = require('../controllers/controller');

  	app.route('/createBlock')
		.post(blockchain.create_a_block);

	app.route('/getChain')
		.get(blockchain.listChain);

	app.route('/map')
		.get(function(req, res){
			var url = "https://www.google.com/maps/search/?api=1&query=";
			url = url + req.query.lat + "," + req.query.lon;

			var encoded = encodeURI(url);
			res.send(encoded);
		});
};

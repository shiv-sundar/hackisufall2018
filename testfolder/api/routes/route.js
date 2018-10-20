'use strict';

module.exports = function(app) {
  	var blockchain = require('../controllers/controller');

  	app.route('/createBlock')
		.post(blockchain.create_a_block);

	app.route('/getChain')
		.get(blockchain.listChain);

};

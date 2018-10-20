'use strict';

module.exports = function(app) {
  var blockchain = require('../controllers/controller');

  app.route('/test')
    .get(blockchain.listChain)
	.post(blockchain.create_a_task);

};
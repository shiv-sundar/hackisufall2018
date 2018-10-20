'use strict';

module.exports = function(app) {
  	var blockchain = require('../controllers/controller');

  	app.route('/createSource')
		.post(blockchain.create_a_sourceBlock);

	app.route('/createTransportation')
		.post(blockchain.create_a_transportationBlock);

	app.route('/createEndpoint')
		.post(blockchain.create_an_endpointBlock);

	app.route('/createStorage')
		.post(blockchain.create_a_storageBlock);

	app.route('/findEndpoints')
		.get(blockchain.listEndpoints);

	app.route('/findTransports')
		.get(blockchain.listTransport);

	app.route('/findStorages')
		.get(blockchain.listStorage);

	app.route('/findSources')
		.get(blockchain.listSource);
};

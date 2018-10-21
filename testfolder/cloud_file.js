const {Storage} = require('@google-cloud/storage');

const storage = new Storage();

const bucketName = 'testdomaininfoodchain';
const filename = 'server.js'


await storage.bucket(bucketName).upload(filename, {
	
	gzip: true,
	metadata: {
		cacheControl: 'public, max-age=31536000';
	}
});

console.log('${fileName} uploaded to ${bucketName}');

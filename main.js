/*test by navigating to directory in command line and 
running "node main.js"
then go to 127.0.0.1:8081 in browser to check functionality
*/

var http = require("http");

http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Hello World\n');
}).listen(8081);

console.log('server running at 127.0.0.1:8081/')	
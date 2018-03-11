
//Load HTTP module
var http = require("http");
var fs = require("fs");

//Create HTTP server and listen on port 8000 for requests

var server= http.createServer(function (req, res) {

   console.log("request was made: "+ req.url);
   res.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body "Hello World"
   res.end('Hello World\n');
});
server.listen(3000);
console.log("server luistert naar poort 3000");

// Print URL for accessing server
console.log('Server running at http://127.0.0.1:8000/')


//Load HTTP modules
var http = require("http");
var fs = require("fs");


//nieuwe variable server maken
var server= http.createServer(function (req, res) {

   console.log("request was made: "+ req.url);
   res.writeHead(200, {'Content-Type': 'text/html'});
   var myReadStream=fs.createReadStream(__dirname + '/wat-is-express-js.html', 'utf8');
   myReadStream.pipe(res);


});
server.listen(3000);
console.log("server luistert naar poort 3000");


//Load HTTP modules
var http = require("http");
var fs = require("fs");


//nieuwe variable server maken
var server= http.createServer(function (req, res) {

   console.log("request was made: "+ req.url);
   if(req.url ==='/wat-is-express-js' ){
   res.writeHead(200, {'Content-Type': 'text/html'});
   //van waar wil je uitlezen, wat wil je lezen?
   fs.createReadStream(__dirname + '/wat-is-express-js.html', 'utf8').pipe(res);}
   //pipe om readstream te lezen en te schrijven in 1 keer
   else{
     res.writeHead(404, {'Content-Type': 'text/html'});
     //van waar wil je uitlezen, wat wil je lezen?
     fs.createReadStream(__dirname + '/404.html', 'utf8').pipe(res);
   }



});
server.listen(3000);
//welke poort
console.log("server luistert naar poort 3000");

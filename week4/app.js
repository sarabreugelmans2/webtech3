var express= require('express');
var app= express();

app.get('/wat-is-express-js', function(req,res){
  res.sendFile(__dirname + '/wat-is-express-js.html');
});

app.listen(3000);
console.log("U luistert naar poort 3000");

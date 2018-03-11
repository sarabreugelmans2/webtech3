var express= require('express');
var pug = require('pug');
var app= express();

app.set ('view engine', 'pug');
app.use('/static', express.static('public'));
app.get('/wat-is-express-js', function(req,res){
  res.render(__dirname + '/wat-is-express-js.pug');
});

app.listen(5000);
console.log("U luistert naar poort 5000");

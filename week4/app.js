var express= require('express');
var pug = require('pug');
var app= express();

app.set('port', (process.env.PORT || 5000));

app.set ('view engine', 'pug');
app.use('/static', express.static('public'));
app.get('/wat-is-express-js', function(req,res){
  res.render(__dirname + '/wat-is-express-js.pug');
});

/*app.listen(5000);
console.log("U luistert naar poort 5000");*/
app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

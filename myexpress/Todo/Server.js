var express=require('express');
var app= express();
var bodyParser=require('body-parser');
var cors=require('cors');
var validator=require('express-validator');
var p=process.env.PORT||8081
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(validator());
app.use(require('./controller'));
var server = app.listen(p, function () {
  var host = server.address().address
  var port = server.address().port
console.log("Example app listening at http://%s:%s", host, port)
})

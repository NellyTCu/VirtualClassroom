const express = require('express');
const app = express();
var path = require('path');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');
// import routes
var users = require ('./routes/users');
// create application/json parser

//set up  app
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false})); // support encoded bodies
app.use(bodyParser.raw());

//connect to mongodb:
mongoose.connect('mongodb://localhost:27017/Vir_ClassRoom', {useMongoClient: true});
mongoose.Promise = global.Promise;
//init routes
app.use('/', users);


var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("Ung dung Node.js dang lang nghe tai dia chi: http://%s:%s", host, port)

})
module.exports =app;

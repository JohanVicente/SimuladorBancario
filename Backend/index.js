var express = require('express');
var app = express();
const bodyParser = require('body-parser')
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'angel',
  database : 'my_db'
});

connection.connect();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

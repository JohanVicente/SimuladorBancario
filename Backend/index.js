var express = require('express');
var app = express();
const bodyParser = require('body-parser')
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'J2d8c1j198',
  database : 'simuladorBancario'
});

connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);

  app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
  });

});

app.get('/ciudades', function (req, res) {
  connection.query('SELECT * FROM CIudades',  (error, results, fields) => {
  if (error) throw error;
  console.log('The solution is: ', results[0].solution);
  res.send(results);
  });
});

app.get('/', function (req, res) {
  res.send('Hello World!');
});

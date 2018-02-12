'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'angel',
  database : 'simuladorBancario'
});

function getUsuarios (req, res) {
  connection.query('SELECT * FROM Usuarios',  (error, results, fields) => {
  if (error) throw error;
  res.status(200).send(results);
  });
}

function createUser (req, res){
  res.status(200).send(req.body);
  let usuario =
}

module.exports = {
  getUsuarios,
  createUser
}

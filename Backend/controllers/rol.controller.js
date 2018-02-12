'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'angel',
    database: 'simuladorBancario'

});

function getRol(req, res) {
    connection.query('SELECT * FROM roles', (error, results, fields) => {
        if (error) throw error;
        res.status(200).send(results);
    });
}

function createRol(req, res) {
    res.status(200).send(req.body);
}

module.exports = {
    getRol,
    createRol
}
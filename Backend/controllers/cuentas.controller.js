'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'J2d8c1j198',
    database: 'simuladorBancario'
});

function getCuentas(req, res) {
    connection.query('SELECT * FROM cuentas', (error, results, fields) => {
        if (error) throw error;
        res.status(200).send(results);
    });
}

function createCuenta(req, res) {
    res.status(200).send(req.body);

}

module.exports = {
    getCuentas,
    createCuenta
}
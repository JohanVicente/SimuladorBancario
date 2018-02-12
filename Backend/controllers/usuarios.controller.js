'use strict'

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'J2d8c1j198',
    database: 'simuladorBancario'
});

function getUsuarios(req, res) {
    connection.query('SELECT * FROM Usuarios', (error, results, fields) => {
        if (error) throw error;
        res.status(200).send(results);
    });
}

function createUser(req, res) {
    let usuario = req.body;
    connection.query("SELECT * FROM Usuarios WHERE email = ?", [req.body.email], (error, results, fields) => {
        if (error) { throw error; } else {
            if (results.length > 0) {
                res.status(400).send({ message: 'Email' });
            } else {
                connection.query("INSERT INTO Usuarios SET ?", req.body, (error, results, fields) => {
                    if (error) throw error;
                    res.status(200).send({ message: 'Usuario creado correctamente' });
                });
            }
        }
    });

    function findByEmail(email) {
        res.status(200).send(req.body);
    }

    module.exports = {
        getUsuarios,
        createUser
    }
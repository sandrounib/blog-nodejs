var mysql = require('mysql');

var conectBanco = mysql.createConnection({
    host : "localhost",
    user: "root",
    password: "",
    database: "blog"
});

module.exports = conectBanco;
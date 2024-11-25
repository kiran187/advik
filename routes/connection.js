// var mysql = require("mysql");

// var conn = mysql.createConnection({
//   host:"localhost",
//   user :"root",
//   password:"",
//   database:"advik_genius_class"
// })

// var exe = util.promisify(conn.query).bind(conn);

// module.exports=exe;

require('dotenv').config();

const mysql = require('mysql');
var util = require("util");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

var exe = util.promisify(connection.query).bind(connection);
module.exports=exe;
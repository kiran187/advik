var util = require("util");

require('dotenv').config();

const mysql = require('mysql');

// Create a MySQL connection using environment variables
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Promisify the connection query method to use async/await
var exe = util.promisify(connection.query).bind(connection);

// Export the promisified query method for use in other parts of the application
module.exports = exe;

// Import and require mysql2
const mysql = require('mysql2');
//require dotenv file
require("dotenv").config()

// Connect to business database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // env variables
    user: process.env.USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
);

//connect database
db.connect();

//export db
module.exports = { db };
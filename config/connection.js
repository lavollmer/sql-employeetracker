// Import and require mysql2
const mysql = require('mysql2');
//require dotenv file
require("dotenv").config()

// Connect to business database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // env variables
    user: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
);

//debugging for connection
// console.log(`Connected to the business_db database.`)

module.exports = { db };
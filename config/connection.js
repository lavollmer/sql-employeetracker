// Import and require mysql2
const mysql = require('mysql2');
require("dotenv").config()

// Connect to database
const business = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the business_db database.`)
);

module.exports = { business };
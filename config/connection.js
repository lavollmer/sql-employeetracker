// Import and require mysql2
const mysql = require('mysql2');
//require dotenv file
require("dotenv").config()

// Connect to business database
const connection = mysql.createConnection(
  {
    host: 'localhost',
    // env variables
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
);

//connect database and throw error is not connected
connection.connect(function (err) {
  if (err) {
    console.log("error with connection");
  } else {
    console.log("Database business is connnected.");
  }
});

//export db
module.exports = connection;
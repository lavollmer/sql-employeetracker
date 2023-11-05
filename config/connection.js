const Sequelize = require('sequelize');
//loading up env package
require("dotenv").config()

// Create a connection object
const sequelize = new Sequelize(
  //using dotenv to store name, user, password
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Database location
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
  }
);

module.exports = sequelize;
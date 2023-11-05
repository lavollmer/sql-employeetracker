//requiring in express
const express = require("express");
const app = express();

//inquirer package
const inquirer = require('inquirer');

//import table package
import { table } from 'table';

//import business db
const db = require("./config/connection.js");

// Import and require mysql2
const mysql = require('mysql2');

// inquirer prompt to ask questions
inquirer.prompt([
  {
    //THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    type: 'list',
    message: 'What would you like to do',
    name: 'mainMenu',
    choices: ["All departments", "All Employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
  }]).then(answers => {
    //case and switch statement with mainMenu choices
    switch (answers.mainMenu.choices) {
      case 'All departments':
        db.query('SELECT * FROM department', function (err, results) {

        })
        break;
      case 'All Employees':

        break;
      case 'Add a department':

        break;
      case 'Add a role':

        break;
      case 'Add an employee':

        break;
      case 'Update an employee role':

        break;
      default:
    }
  });



// Query database
// db.query('SELECT * FROM students', function (err, results) {
//   console.log(results);
// });
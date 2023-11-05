//requiring in express
const express = require("express");
const app = express();

//inquirer package
const inquirer = require('inquirer');

//requiring table in
const table = require('table');

//import business db
const db = require('./config/connection');

// inquirer prompt to ask questions
// inquirer.prompt([
//   {
//     //THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
//     type: 'list',
//     message: 'What would you like to do',
//     name: 'mainMenu',
//     choices: ["All departments", "All Employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
//   }]).then(answers => {
//     //case and switch statement with mainMenu choices
//     switch (answers.mainMenu) {
//       case 'All departments':
//         db.query('SELECT * FROM department', function (err, results) {
//           if (err) {
//             //err message
//             console.log("This is an error");
//             return;
//           } else {
//             //table the results
//             console.log(table(results));
//             return;
//           }
//         });
//         break;
//       case 'All Employees':

//         break;
//       case 'Add a department':

//         break;
//       case 'Add a role':

//         break;
//       case 'Add an employee':

//         break;
//       case 'Update an employee role':

//         break;
//       default:
//     }
//   });


db.query('SELECT * FROM department', (err, data) => err ? console.log(err) : console.log(data))
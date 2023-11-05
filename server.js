//requiring in express
const express = require("express");
const app = express();

//inquirer package
const inquirer = require('inquirer');

//requiring table in
const { printTable } = require('console-table-printer');

//import business db
const connection = require('./config/connection');

// inquirer prompt to ask questions
inquirer.prompt([
  {
    //THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    type: 'list',
    message: 'What would you like to do',
    name: 'mainMenu',
    choices: ["All departments", "All Employees", "Add a department", "Add a role", "Add an employee", "Remove Employee", "Update an employee role", "Update employee manager", "Quit"]
  }]).then(answers => {
    //case and switch statement with mainMenu choices
    switch (answers.mainMenu) {
      case 'All departments':
        viewDepartment();
        break;
      case 'All Employees':
        viewEmployee();
        break;
      case 'Add a department':
        addDepartment();
        break;
      case 'Add a role':
        addRole();
        break;
      case 'Remove employee':

        break;
      case 'Add an employee':

        break;
      case 'Update an employee role':

        break;
      case 'Update an manager role':

        break;
      default:
    }
  });

//viewDepartment
function viewDepartment() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, data) => {
    if (err) {
      console.log("err");
      return;
    } else {
      console.log(printTable(data));
      return;
    }
  })
};

//viewEmployee
function viewEmployee() {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, data) => {
    if (err) {
      console.log("err");
      return;
    } else {
      console.log(printTable(data));
    }
  });
}

// function addDepartment() {
//   inquirer.prompt[{
//     type: 'list',
//     message: 'What would you like to do',
//     name: 'mainMenu',
//     choices: ["All departments", "All Employees", "Add a department", "Add a role", "Add an employee", "Remove Employee", "Update an employee role", "Update employee manager", "Quit"]
//   }]
// }.then(answers => {
// })

function addRole() {
  inquirer.prompt([{
    type: 'input',
    message: 'What is the name of the role?',
    name: 'roleName'
  }, {
    type: 'input',
    message: 'What is the salary of the role?',
    name: 'salaryNewRole'
  }, {
    type: 'list',
    message: 'What department does the role belong to?',
    name: 'deptNewRole',
    choices: ["Engineering", "Marketing", "Finance", "Sales"]
  }]).then(answers => {
    const query = `INSERT INTO role VALUES ("${answers.roleName}","${answers.salaryNewRole}", "${answers.deptNewRole}")`;
    connection.query(query, (err, data) => {
      if (err) {
        console.log("err");
        return;
      } else {
        console.log(printTable(data));
      }
    });
  })
}
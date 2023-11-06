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
function start() {
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
    })
};

//viewDepartment
function viewDepartment() {
  const query = 'SELECT * FROM department';
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err.message);
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
      console.log(err.message);
      return;
    } else {
      console.log(printTable(data));
    }
  });
}

//addDepartment function
function addDepartment() {
  //prompt for user for more additional information
  inquirer.prompt([
    {
      type: 'input',
      message: 'What department would you like to add?',
      name: 'newDepartment'
    }
  ]).then(answers => {
    //query to run to insert information
    const query = `INSERT INTO department (d_name) VALUES ("${answers.newDepartment}")`;
    //running the query in the database
    connection.query(query, (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      } else {
        start();
      }
    });
  });
}

//addRole function
function addRole() {
  //add interger values to department names for query
  const choices = [
    { name: "Engineering", value: "1" },
    { name: "Marketing", value: "2" },
    { name: "Finance", value: "3" },
    { name: "Sales", value: "4" }
  ]
  //prompt for user for more additional information
  inquirer.prompt([
    {
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
      choices: choices
    }
  ]).then(answers => {
    //query to run to insert information
    const query = `INSERT INTO role (title, salary, department_id) VALUES ("${answers.roleName}","${answers.salaryNewRole}", "${answers.deptNewRole}")`;
    //running the query in the database
    connection.query(query, (err, data) => {
      if (err) {
        console.log(err.message);
        return;
      } else {
        start();
      }
    });
  });
}


//start the app
start();
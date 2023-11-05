//requiring in express
const express = require("express");
const app = express();

//inquirer package
const inquirer = require('inquirer');

// inquirer prompt to ask questions
inquirer.prompt([
  {
    //THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
    type: 'list',
    message: 'What would you like to do',
    name: 'mainMenu',
    choices: ["All departments", "All Employees", "Add a department", "Add a role", "Add an employee", "Update an employee role"]
  )].then(answers => {

    }










//store inquirer prompt to get answers in function prompt
function prompt() {
        return inquirer.prompt(questions).then(answers => {
          console.log(answers);
          return answers;
        })
      }

// TODO: Create a function to write README file
// writeFile to README.md using answers
function writeToFile(answers) {
        fs.writeFile('README.md', answers, (err) =>
          err ? console.error(err) : console.log('Finished!'))
      }

// TODO: Create a function to initialize app
// Use answers in generateMarkdown function to writeToFile
function init() {
        return prompt().then(answers => {
          writeToFile(generateMarkdown(answers))
        })
      }

// Function call to initialize app
init();
//inquirer package
const inquirer = require('inquirer');

//import business db
const connection = require('./config/connection');

//employee manager design
console.log("EMPLOYEE MANAGER");

// inquirer prompt to ask questions
function start() {
  inquirer.prompt([
    {
      //THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
      type: 'list',
      message: "Please select from following:",
      name: 'mainMenu',
      choices: ["View All Departments", "View All Roles", "View All Employees", "Add a department", "Add a role", "Add an Employee", "Remove Employee", "Update an employee role", "View Employees Based on Department", "View Total Utilized Budget of Business", "Quit"]
    }]).then(answers => {
      //case and switch statement with mainMenu choices
      switch (answers.mainMenu) {
        case 'View All Departments':
          viewDepartment();
          break;
        case 'View All Roles':
          viewRole();
          break;
        case 'View All Employees':
          viewEmployee();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an Employee':
          addEmployee();
          break;
        case 'Remove Employee':
          removeEmployee();
          break;
        case 'Update an employee role':
          updateRole();
          break;
        case 'View Employees Based on Department':
          viewEmployeeByDept();
          break;
        case 'View Total Utilized Budget of Business':
          viewTotalBudget();
          break;
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
      console.table(data);
      start();
      return;
    }
  })
};

//viewRole
function viewRole() {
  const query = 'SELECT * FROM role';
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      console.table(data);
      start();
    }
  });
}

//viewEmployee
function viewEmployee() {
  const query = 'SELECT * FROM employee';
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      console.table(data);
      start();
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
    //query to run to insert new department information
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

//addEmployee function
function addEmployee() {
  //add interger values to department names for query
  const choices = [
    { name: "Engineering", value: "1" },
    { name: "Marketing", value: "2" },
    { name: "Finance", value: "3" },
    { name: "Sales", value: "4" }
  ]
  const manager = [
    { name: "Denise Letter", value: "1" },
    { name: "Patricia Puzzles", value: "2" },
    { name: "Jake Jaens", value: "3" },
    { name: "Louise Loeide", value: "4" },
    { name: "Sam Square", value: "5" },
    { name: "Olive Owenser", value: "6" },
    { name: "Rita Swan", value: "7" },
    { name: "None of the above", value: "8" }
  ]
  //prompt for user for more additional information
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the first name of the new employee?',
      name: 'firstName'
    }, {
      type: 'input',
      message: 'What is the last name of the new employee?',
      name: 'lastName'
    }, {
      type: 'list',
      message: 'What department does the role belong to?',
      name: 'deptRole',
      choices: choices
    },
    {
      type: 'list',
      message: 'Who is the manager of the new employee?',
      name: 'managerEmployee',
      choices: manager
    }
  ]).then(answers => {
    //query to run to insert information
    const query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ("${answers.firstName}","${answers.lastName}", "${answers.deptRole}", "${answers.managerEmployee}")`;
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

//addEmployee function
function removeEmployee() {
  //add interger values to department names for query
  const choices = [
    { name: "Engineering", value: "1" },
    { name: "Marketing", value: "2" },
    { name: "Finance", value: "3" },
    { name: "Sales", value: "4" }
  ]
  const manager = [
    { name: "Denise Letter", value: "1" },
    { name: "Patricia Puzzles", value: "2" },
    { name: "Jake Jaens", value: "3" },
    { name: "Louise Loeide", value: "4" },
    { name: "Sam Square", value: "5" },
    { name: "Olive Owenser", value: "6" },
    { name: "Rita Swan", value: "7" },
    { name: "None of the above", value: "8" }
  ]

  //prompt for user for more additional information
  inquirer.prompt([
    {
      type: 'input',
      message: 'What is the first name of the employee you would like to remove?',
      name: 'firstName'
    }, {
      type: 'input',
      message: 'What is the last name of the employee you would like to remove?',
      name: 'lastName'
    }, {
      type: 'list',
      message: 'What department does the role belong to?',
      name: 'deptRole',
      choices: choices
    },
    {
      type: 'list',
      message: 'Who is the manager of the new employee?',
      name: 'managerEmployee',
      choices: manager
    }
  ]).then(answers => {
    //query to run to insert information
    const query = `DELETE FROM employee (first_name, last_name, role_id, manager_id) WHICH ("${answers.firstName}","${answers.lastname}", "${answers.deptRole}", "${answers.managerEmployee}")`;
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

function updateRole() {
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
    },
    {
      type: 'input',
      message: 'What is the name of the new role?',
      name: 'roleNewName'
    },
    {
      type: 'input',
      message: 'What is the salary of the current role?',
      name: 'salaryOldRole'
    },
    {
      type: 'input',
      message: 'What is the new salary of the new role?',
      name: 'salaryNewRole'
    },
    {
      type: 'list',
      message: 'What department does the role belong to?',
      name: 'deptOldRole',
      choices: choices
    }, {
      type: 'list',
      message: 'What department does the new role belong to?',
      name: 'deptNewRole',
      choices: choices
    }
  ]).then(answers => {
    //query to run to insert information
    const query = `UPDATE role SET title="${answers.roleNewName}", salary=${answers.salaryNewRole}, department_id="${answers.deptNewRole}" WHERE title="${answers.roleName}" AND salary=${answers.salaryOldRole} AND department_id="${answers.deptOldRole}" `;
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


//viewEmployeeByDept
function viewEmployeeByDept() {
  const query = 'SELECT department.id AS value, department.d_name AS name FROM department';
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      inquirer.prompt([
        {
          type: 'list',
          message: 'What department would you like to view employees in?',
          name: 'deptViewEmployees',
          choices: data
        }
      ]).then(answers =>
        console.table(answers)
      )
    }
  });
}

//viewTotalBudget
function viewTotalBudget() {
  const query = 'SELECT sum(salary) FROM role';
  connection.query(query, (err, data) => {
    if (err) {
      console.log(err.message);
      return;
    } else {
      console.table(data);
      start();
    }
  });
}

//start the app
start();

// inquirer.prompt([
//   {
//     type: 'list',
//     message: 'What would you like to do?',
//     name: 'mainMenu',
//     choices: ["View All Departments", "View All Roles", "View All Employees", "Add a department", "Add a role", "Add an Employee", "Remove Employee", "Update an employee role", "View All Employees by Department", "View Total Utilized Budget of Business", "Quit"]
//   }]).then(answers => {
//     console.log(answers);
//   })
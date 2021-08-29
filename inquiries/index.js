const inquirer = require('inquirer');
const viewDepartments = require('./viewDepartments');
const viewRoles = require("./viewRoles");
const viewEmployees = require("./viewEmployees")
const addDepartment = require('./addDepartment');
const addRole = require('./addRole');
const addEmployee = require('./addEmployee');
const updateEmployee = require("./updateEmployee");
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'rootR00t!',
    database: 'employees_db'
});

db.connect((err) => {
    if (err) {
        console.log(err);
        throw err;
    }
    console.log(`Connected to employee_db`)
    startMenu();
});

const startList = [
    {
        type: 'list',
        message: 'Hello! What would you like to do today?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        name: 'startList'
    }
];

const startMenu = () => {
    inquirer.prompt(startList).then((response) => {
        console.log(response);

    switch (response.startList) {
        case "View all departments":
            handleViewDepartments();
            break;

        case "View all roles":
            viewRoles();
            break;
        
        case "View all employees":
            viewEmployees();
            break;

        case "Add a department":
            addDepartment();
            break;

        case "Add a role":
            addRole();
            break;

        case "Add an employee":
            addEmployee();
            break;

        case "Update an employee role":
            updateEmployee();
            break;
        
        default:
            break;
    }
});

const handleViewDepartments = () => {
    viewDepartments()
      .then((departmentData) => {
        console.table(departmentData[0]);
        startMenu();
      })
      .catch((error) => {
        console.log(error);
      });
  }};

module.exports = startMenu
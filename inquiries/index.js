const inquirer = require('inquirer');
const viewDepartments = require('./viewDepartments');
const viewRoles = require("./viewRoles");
const viewEmployees = require("./viewEmployees")
const addDepartment = require('./addDepartment');
const addRole = require('./addRole');
const addEmployee = require('./addEmployee');
const updateEmployee = require("./updateEmployee");

const startList = [
    {
        type: 'list',
        message: 'Hello! What would you like to do today?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role'],
        name: 'startList'
    }
];

const startMenu = () => {
    inquirer
        .prompt(startList)
        .then(response => {
            console.log(response);
            if (response.startList === 'View all departments') {
                viewDepartments();
            } else if (response.startList === "View all roles") {
                viewRoles();
            } else if (response.startList === "View all employees") {
                viewEmployees();
            } else if (response.startList === 'Add a department') {
                addDepartment();
            } else if (response.startList === 'Add a role') {
                addRole();
            } else if (response.startList === 'Add an employee') {
                addEmployee();
            } else if (response.startList === "Update an employee role") {
                updateEmployee();
            }
        })
};

module.exports = startMenu
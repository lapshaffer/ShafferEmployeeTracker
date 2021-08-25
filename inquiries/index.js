// TODO:
    // Write Inquirer prompts
        // when user wants to view all departments, they are presented with a formatted table showing all departments and their ids
        // when the user wants to view all roles, they are presented with a formatted table showing all job titles, their role ids, the department that role belongs to, and the salary for that role
            // There will need to be a join
        // when the user wants to view all employees, they are presented with a formatted table showing all employee ids, first names, last names, job titles, departments, salaries, and the managers that those employees report to
            // DOUBLE JOIN
        // when the user wants to add a department, they are prompted to enter the name of the department and that department is created and added to the database
        // when the user wants to add a role, they are prompted to enter the name, salary and department of the role and that role is added to the database
            // to display department names, I'll need to query the department table to show the department names instead of their ids
        // when the user wants to add an employee, they are prompted to enter the first name, last name, role, and manager of the employee and that employee is added to the database
            // manager options filtered only down to applicable department
            // the role name options will need to be brought in also
        // when the user wants to update an employee's role, they are prompted to select an employee to update their role and that new role is updated in the database
            // again, role name will need to be brought in from the role table
    
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
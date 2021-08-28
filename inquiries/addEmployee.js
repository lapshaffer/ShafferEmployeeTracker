// TODO:
// User is prompted to enter first name, last name, role, and manager to add an employee to the database
    // Manager options should be filtered down to applicable department
    // Will need to query department table to display department names and role table to display role names

const inquirer = require('inquirer');
const db = require('../config/connection');

const employeePrompt = [
    {
        type: 'input',
        message: 'What is the first name of the new employee?',
        name: 'firstName'
    },
    {
        type: 'input',
        message: 'What is the last name of the new employee?',
        name: 'lastName'
    },
    {
        type: 'list',
        message: 'What role will this employee be performing?',
        choices: roleArray,
        name: 'role'
    },
    {
        type: 'input',
        message: 'Who is the manager of this employee?',
        name: 'manager'
    }
];

const addEmployee = () => {
    inquirer
    .prompt(employeePrompt)
    // .then to add new employee
}


module.exports = addEmployee
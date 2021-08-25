// TODO:
// User is prompted to enter first name, last name, role, and manager to add an employee to the database
    // Manager options should be filtered down to applicable department
    // Will need to query department table to display department names and role table to display role names

const inquirer = require('inquirer');
const db = require('../config/connection');

const newEmployee = [
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
        choices: [], // query role table to pull names via their ids to display here
        name: 'role'
    },
    {
        type: 'list',
        message: 'Who is the manager of this employee?',
        choices: [], // query employee table to display all employees in this employee's department as potential managers
        name: 'manager'
    }
];

const addEmployee = () => {
    inquirer
    .prompt(newEmployee)
    // .then to push new employee into employee table
}

module.exports = addEmployee
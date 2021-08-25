// TODO:
// User is prompted to enter the name, department, and salary of the role they wish to add to the database
    // Will need to query the department table to display department names rather than ids

const inquirer = require('inquirer');
const db = require('../config/connection');

const newRole = [
    {
        type: 'input',
        message: 'What is the name of the new role?',
        name: 'newRole'
    },
    {
        type: 'list',
        message: 'To which department does this role belong?',
        choices: [], // query department table to pull names in via their ids to display here
        name: 'roleDepartment'
    },
    {
        type: 'input',
        message: 'What is the salary for this role?',
        name: 'roleSalary'
    }
];

const addRole = () => {
    inquirer
    .prompt(newRole)
    // .then to push new role into role table
}

module.exports = addRole
// TODO:
// User is prompted to enter the name, department, and salary of the role they wish to add to the database
// Will need to query the department table to display department names rather than ids

const inquirer = require('inquirer');
const db = require('../config/connection');

const rolePrompt = [
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'newRole'
        },
        {
            type: 'list',
            message: 'To which department does this role belong?',
            choices: departmentChoices,
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
    .prompt(rolePrompt)
    // .then to add a new role
}


module.exports = addRole
// TODO:
// User is prompted to enter the name of a department, and that department is added to the database

const inquirer = require('inquirer');
const db = require('../config/connection');

const newDepartment = [
    {
        type: 'input',
        message: 'What is the name of the new department?',
        name: 'department'
    }
];

const addDepartment = () => {
    inquirer
    .prompt(newDepartment)
    // .then to push new department into department table
}

module.exports = addDepartment
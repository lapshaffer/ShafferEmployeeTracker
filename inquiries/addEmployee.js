const inquirer = require('inquirer');
const consoleTable = require('console.table');
const startMenu = require('./index');
const db = require('../config/connection');
const selectRole = require('./arrays');
const selectManager = require('./arrays');

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
        choices: selectRole(),
        name: 'role'
    },
    {
        type: 'list',
        message: 'Who is the manager of this employee?',
        choices: selectManager(),
        name: 'manager'
    }
];

// User is prompted to enter first name, last name, role, and manager to add an employee to the database
const addEmployee = () => {
    inquirer
    .prompt(employeePrompt)
    .then(function (res) {
        let roleId = selectRole().indexOf(res.role) + 1
        let managerId = selectManager().indexOf(res.manager) + 1
        db.promise().query('INSERT INTO employee SET ?', {
            first_name: res.first_name,
            last_name: res.last_name,
            manager_id: managerId,
            role_id: roleId
        }, function (err) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
    })
};

module.exports = addEmployee
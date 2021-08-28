// TODO:
// User is prompted to enter the name of a department, and that department is added to the database

const inquirer = require('inquirer');
const consoleTable = require('console.table');
const startMenu = require('./index');
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
    .then(function (res) {
        db.query('INSERT INTO department SET ?',
            {
                name: res.name
            },
            function (err, res) {
                if (err) throw err
                console.table(res);
                startMenu();
            }
        )
    })
};

module.exports = addDepartment
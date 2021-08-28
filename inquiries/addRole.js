const inquirer = require('inquirer');
const consoleTable = require('console.table');
const startMenu = require('./index');
const db = require('../config/connection');
const selectDepartment = require('./arrays')

const rolePrompt = [
        {
            type: 'input',
            message: 'What is the name of the new role?',
            name: 'newRole'
        },
        {
            type: 'list',
            message: 'To which department does this role belong?',
            choices: selectDepartment(),
            name: 'roleDepartment'
        },
        {
            type: 'input',
            message: 'What is the salary for this role?',
            name: 'roleSalary'
        }
    ];

// User is prompted to enter the name, department, and salary of the role they wish to add to the database
const addRole = () => {
    inquirer
    .prompt(rolePrompt)
    .then(function (res) {
        let departmentId;
        for (let i = 0; i < departmentsArray.length; i++) {
            if (res.roleDepartment == departmentsArray[i].name) {
                departmentId = departmentsArray[i].id;
            }
        }
        db.query('INSERT INTO role SET ?',
            {
                title: res.newRole,
                department_id: departmentId,
                salary: res.roleSalary,
            },
            function (err, res) {
                if (err) throw err
                console.table(res);
                startMenu();
            }
        )
    });
};


module.exports = addRole
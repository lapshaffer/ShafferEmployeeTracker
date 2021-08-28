// TODO:
// Result should display a formatted table of all departments and their ids
    // This can just be the department table
const startMenu = require('./index');
const db = require('../config/connection');
const consoleTable = require('console.table');

const viewDepartments = () => {
    db.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
};

module.exports = viewDepartments
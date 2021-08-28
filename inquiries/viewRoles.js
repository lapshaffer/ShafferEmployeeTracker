// TODO:
// Show table of all role titles, all role ids, the department the role belongs to, and the salary for that role
    // This will need to be a join between the department and role tables
const startMenu = require('./index');
const db = require('../config/connection');
const consoleTable = require('console.table');

const viewRoles = () => {
    db.query("SELECT employee.first_name, employee.last_name, role.title AS Title FROM employee JOIN role ON employee.role_id = role.id",
        function (err, res) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
};

module.exports = viewRoles
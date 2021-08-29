const startMenu = require('./index');
const db = require('../config/connection');
const consoleTable = require('console.table');

// This table shows all roles, the department they're in, their salaries
const viewRoles = () => {
    return db.promise().query(`SELECT role.id AS Id, 
    role.title AS Title, 
    department.name AS Department, 
    role.salary AS Salary 
    FROM role 
    JOIN department 
    ON role.department_id = department.id`,
        function (err, res) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
};

module.exports = viewRoles
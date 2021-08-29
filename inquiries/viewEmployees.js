const startMenu = require('./index');
const db = require('../config/connection');
const consoleTable = require('console.table');

// This function returns a list of all employees, theit ids, their roles, their departments, their salaries, and their managers (if applicable)
const viewEmployees = () => {
    return db.promise().query(`SELECT employee.id AS Id, 
    employee.first_name AS First, 
    employee.last_name AS Last, 
    role.title AS Role, 
    department.name AS Department, 
    role.salary AS Salary, 
    CONCAT(MyManager.first_name, ' ', MyManager.last_name) AS Manager 
    FROM employee 
    JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id 
    LEFT JOIN employee MyManager on MyManager.id = employee.manager_id`,
        function (err, res) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
};

module.exports = viewEmployees
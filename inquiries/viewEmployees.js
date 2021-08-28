// TODO:
// Show table of all employee ids, first names, last names, role titles, departments, salaries and managers (if applicable)
    // This will need to be a double join on the department, role, and employee tables
const startMenu = require('./index');
const db = require('../config/connection');
const consoleTable = require('console.table');

const viewEmployees = () => {
    db.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;",
        function (err, res) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
};

module.exports = viewEmployees
const startMenu = require('./index');
const db = require('../config/connection');
const consoleTable = require('console.table');

// This table shows all departments 
const viewDepartments = () => {
    db.query(`SELECT department.id AS Id, department.name AS DepartmentFROM department`,
        function (err, res) {
            if (err) throw err
            console.table(res)
            startMenu()
        })
};

module.exports = viewDepartments
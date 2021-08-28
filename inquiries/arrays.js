const db = require('../config/connection');

const rolesArray = [];
function selectRole() {
    db.query("SELECT * FROM role", function (err, res) {
        if (err) throw err
        for (let i = 0; i < res.length; i++) {
            rolesArray.push(res[i].title);
        }
    })
    return rolesArray;
};

const managersArray = [];
function selectManager() {
    db.query("SELECT first_name, last_name FROM employee WHERE manager_id IS NULL", function (err, res) {
        if (err) throw err
        for (let i = 0; i < res.length; i++) {
            managersArray.push(res[i].first_name);
        }
    })
    return managersArray;
};

const departmentsArray = [];
function selectDepartment() {
    db.query("SELECT id, name FROM department ORDER BY name ASC", function (err, res) {
        if (err) throw err
        for (let i = 0; i < res.length; i++) {
            departmentsArray.push(res[i].name)
        }
    })
    return departmentsArray;
};

module.exports = selectRole, selectManager, selectDepartment
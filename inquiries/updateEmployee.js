// TODO:
// User is prompted to select and employee and update their role to an existing role in the database
 // Will need to query role table to replace role id with role name

 const inquirer = require('inquirer');
 const db = require('../config/connection');
 const startMenu = require('./index')
 const selectRole = require('./arrays');

 const update = [
     {
         type: 'list',
         message: 'Which employee would you like to update?',
         choices: function () {
            let lastName = [];
            for (let i = 0; i < res.length; i++) {
                lastName.push(res[i].last_name);
            }
            return lastName;
        },
         name: 'updatedEmployee'
     },
     {
         type: 'list',
         message: 'Which role would you like to assign to this employee?',
         choices: selectRole(),
         name: 'updatedRole'
     }
 ];

 const updateEmployee = () => {
    return db.promise().query("SELECT employee.last_name, role.title FROM employee JOIN role ON employee.role_id = role.id;", (err, res) => {
        if (err) throw err
        console.table(res)
     inquirer
     .prompt(update)
     .then(function (res) {
        let roleId = selectRole().indexOf(res.role) + 1
        return db.promise().query('UPDATE employee SET ? WHERE ?',
            [{
                role_id: roleId,
            },
            {
                last_name: val.last_name,
            }],
            function (err) {
                if (err) throw err
                console.table(res)
                startMenu()
            })
    });
})};

 module.exports = updateEmployee
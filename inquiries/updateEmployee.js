// TODO:
// User is prompted to select and employee and update their role to an existing role in the database
 // Will need to query role table to replace role id with role name

 const inquirer = require('inquirer');
 const db = require('../config/connection');

 const update = [
     {
         type: 'list',
         message: 'Which employee would you like to update?',
         choices: [], // query employee table to display all employee's first and last names
         name: 'updatedEmployee'
     },
     {
         type: 'list',
         message: 'Which role would you like to assign to this employee?',
         choices: [], // query role table to display all role names
         name: 'updatedRole'
     }
 ];

 const updateEmployee = () => {
     inquirer
     .prompt(update)
     // .then to update employee role in employee table based on inputs
 }

 module.exports = updateEmployee
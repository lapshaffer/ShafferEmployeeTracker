const db = require("../config/connection");

// This table shows all departments
const viewDepartments = () => {
  return db
    .promise()
    .query(
      `SELECT department.id AS Id, department.name AS Department FROM department`
    );
};

module.exports = viewDepartments;
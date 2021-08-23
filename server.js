// TODO:
    // Run index.js from server.js file, or vice versa
    // Write prepared statements to show certain combinations of data, or to update certain databases or entries, upon user selection
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'rootR00t!',
        database: 'employees_db'
    },
    console.log(`Connected to the employees_db database.`)
);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
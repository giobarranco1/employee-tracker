const inquirer = require("inquirer");
const mySQL = require("mysql2");
const table = require("console.table");

const db = mySQL.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employeeDB"
});
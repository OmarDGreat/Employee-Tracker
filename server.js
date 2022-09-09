//Dependincies 
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const Connection = require("mysql2/typings/mysql/lib/Connection");

//Connetion information for sql database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "employee_db",
    port: 3301
});

// Connect to sql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    console.log("SQL connected");
    // run the start function after the connection is made to prompt the user
    start();
});

// Basic inquirer prompt to start the application
function start(){
    inquirer 
        .prompt([
            {
                type: "list",
                name: "start",
                message: "What would you like to do?",
                choices: ["View", "Add", "Update", "Exit"]
            }
        ]).then (function(res)){
            switch(res.start){
                case "View":
                    view();
                    break;
                case "Add":
                    add();
                    break;
                case "Update":
                    updateEmployee();
                    break;
                case "Exit":
                    console.log("Goodbye!");
                    break;
                default: 
                    console.log("default");
            }
        });
    }


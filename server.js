//Dependincies
const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");


//Connetion information for sql database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employee_db",
});

// Connect to sql server and sql database
connection.connect(function (err) {
  if (err) throw err;
  console.log("SQL connected");
  // run the start function after the connection is made to prompt the user
  start();
});

// Basic inquirer prompt to start the application
function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "start",
        message: "What would you like to do?",
        choices: ["View", "Add", "Update", "Exit"],
      },
    ])
    .then(function (res) {
      switch (res.start) {
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

//View function set
function view(){
  inquirer
    .prompt([
      {
      type: "list",
      name: "view",
      message: "Select one to view:",
      choices: ["Departments", "Roles", "Employees"]
      }
    ]).then(function(res){
      switch(res.view){
        case "Departments":
          viewDepartments();
          break;
        case "Roles":
          viewRoles();
          break;
        case "Employees":
          viewEmployees();
          break;
        default:
          console.log("default");
      }
    });
}

function viewDepartments(){
  connection.query("SELECT * FROM department", function(err, res){
    if(err) throw err;
    console.table(res);
    start();
  });
}

function viewRoles(){
  connection.query("SELECT * FROM role", function(err, res){
    if(err) throw err;
    console.table(res);
    start();
  });
}

function viewEmployees(){
  connection.query("SELECT * FROM employee", function(err, res){
    if(err) throw err;
    console.table(res);
    start();
  });
}


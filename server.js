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

//Add function set
function add(){
  inquirer
    .prompt([
      {
      type: "list",
      name: "add",
      message: "Select one to add:",
      choices: ["Department", "Role", "Employee"]
      }
    ]).then(function(res){
      switch(res.add){
        case "Department":
          addDepartment();
          break;
        case "Role":
          addRole();
          break;
        case "Employee":
          addEmployee();
          break;
        default:
          console.log("default");
      }
    });
}

function addDepartment(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "Enter department name:"
      }
    ]).then(function(res){
      connection.query("INSERT INTO department SET ?", {name: res.department}, function(err, res){
        if(err) throw err;
        console.log("Department added!");
        start();
      });
    });
}

function addRole(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter role title:"
      },
      {
        type: "input",
        name: "salary",
        message: "Enter role salary:"
      },
      {
        type: "input",
        name: "department_id",
        message: "Enter department id:"
      }
    ]).then(function(res){
      connection.query("INSERT INTO role SET ?", {title: res.title, salary: res.salary, department_id: res.department_id}, function(err, res){
        if(err) throw err;
        console.log("Role added!");
        start();
      });
    });
}

function addEmployee(){
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "Enter employee first name:"
      },
      {
        type: "input",
        name: "last_name",
        message: "Enter employee last name:"
      },
      {
        type: "input",
        name: "role_id",
        message: "Enter role id:"
      },
      {
        type: "input",
        name: "manager_id",
        message: "Enter manager id:"
      }
    ]).then(function(res){
      connection.query("INSERT INTO employee SET ?", {first_name: res.first_name, last_name: res.last_name, role_id: res.role_id, manager_id: res.manager_id}, function(err, res){
        if(err) throw err;
        console.log("Employee added!");
        start();
      });
    });
}



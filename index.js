//Include Prompts
const prompts = require("./src/prompts");
const queries = require("./src/queries");

// Import and require mysql2, express & console.table
const express = require('express');
const mysql = require('mysql2');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'password123',
    database: 'tracker_db'
  },
  console.log(`Connected to the tracker_db database.`)
);





app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });






//--------------------Master Switch & Prompt Navigation------------------------

async function masterSwitch(){

  let welcomeRequest = await prompts.welcomePrompts();

  console.log(welcomeRequest.welcomePrompts);

  switch(welcomeRequest.welcomePrompts) {

    case "View All Departments":
      db.query( await queries.viewDepartments() , function (err, results) {
      console.table(results);
      })
      break;

    case "View All Roles":
      db.query( queries.viewRoles() , function (err, results) {
      console.table(results);
      })
      break;
    
    case "View All Employees":
      db.query( queries.viewEmployees() , function (err, results) {
      console.table(results);
      })
      break;
    
    case "Add Department":
      db.query( queries.addDepartment() , function (err, results) {
      console.table(results);
      })
      break;
    
    case "Add Role":
      db.query( queries.addRole() , function (err, results) {
      console.table(results);
      })
      break;
    
    case "Add Employee":
      db.query( queries.addEmployee() , function (err, results) {
      console.table(results);
      })
      break;

    case "Update Employee Role":
      db.query( queries.updateEmployeeRole() , function (err, results) {
      console.table(results);
      })
      break;
    
    default:
      console.log("No Valid Option Selected");

  }

}



//--------------------Initiate Application------------------------

function init(){
  console.log("Init Fired!");
  masterSwitch();
}

init();


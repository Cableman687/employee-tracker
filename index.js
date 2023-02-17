//Include Prompts
const prompts = require("./src/prompts");
const queries = require("./src/queries");
const builders = require("./src/builders");

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

  //Prompt Navigation Outcomes
  
  switch(welcomeRequest.masterPrompts) {

    case "View All Departments":

      await builders.viewDepartments();
      
      break;

    case "View All Roles":

      await builders.viewRoles();

      break;
    
    case "View All Employees":


      await builders.viewEmployees();

      break;
    
    case "Add Department":


      await builders.addDepartment();

      break;
    
    case "Add Role":

      await builders.getDepartments();
      
    
    break;
    
    case "Add Employee":

      await builders.getManagers();

    break;

    case "Update Employee Role":

      await builders.getRoles();

    break;
    
      default:
      console.log("No Valid Option Selected");

  }

  

}

 //--------------------Initiate Application------------------------
export async function init(){

  await masterSwitch();

}

init();

module.exports = {init};








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

let roleTable;
let roleIndex;
let employeeTable;
let employeeIndex;
let updateTable;
let roleArray = [];

//--------------------Master Switch & Prompt Navigation------------------------


async function masterSwitch(){

  let welcomeRequest = await prompts.welcomePrompts();

  //Prompt Navigation Outcomes
  
  switch(welcomeRequest.masterPrompts) {

    case "View All Departments":

      await viewDepartments();
      
      break;

    case "View All Roles":

      await viewRoles();

      break;
    
    case "View All Employees":


      await viewEmployees();

      break;
    
    case "Add Department":


      await addDepartment();

      break;
    
    case "Add Role":

      await getDepartments();
      
    
    break;
    
    case "Add Employee":

      await getManagers();

    break;

    case "Update Employee Role":

      await getRoles();

    break;
    
      default:
      console.log("No Valid Option Selected");

  }

  

}

//---------------------------------------View Departments----------------------------------------
async function viewDepartments(){
  db.query(await queries.viewDepartments(), function (err, results) {
  
    console.table(results);
    init();
  })
}
//---------------------------------------View Roles----------------------------------------------

async function viewRoles(){

  db.query(await queries.viewRoles(), function (err, results) {

    console.table(results);
    init();
    })

}

//---------------------------------------View Employees------------------------------------------

async function viewEmployees(){
  db.query(await queries.viewEmployees() , function (err, results) {
    
    console.table(results);
    init();
    })
}

//---------------------------------------Add Department----------------------------------------

async function addDepartment(){

  db.query(await queries.addDepartment() , function (err, results) {

    console.log("Department Added");
    init();
    })

}


//---------------------------------------Add Role Function----------------------------------------
async function getDepartments(){

    let departmentArray = [];

    db.query('SELECT department_name FROM departments', async function (err, results) {

      for(const element of results){

        departmentArray.push(element.department_name);

      }

      let role = await prompts.addRolePrompts(departmentArray);

      

      db.query('SELECT * FROM departments', async function (err, results) {
      roleTable = results;
      

      for(const element of roleTable){
        if(element.department_name == role.roleDepartment){
          
          roleIndex = element.id;
          
        }
      }

      db.query(await queries.addRole(role, roleIndex) , function (err, results) {

      console.log("Role Added");
      init();
    })
  })

    })
  }

  //---------------------------------------Add Employee Function----------------------------------------

  async function getManagers(){
    let getRoleArray = [];
    let managerIndex;

    db.query('SELECT job_title FROM roles', async function(err,results){
      for(const element of results){
        getRoleArray.push(element.job_title);
      }

      async function getNames(){
        
        let nameArray = [];

        db.query('SELECT first_name, last_name, id FROM employees', async function (err, results){
          for(const element of results){
            let fullName = element.first_name + " " + element.last_name;
            nameArray.push(fullName);
          }

          await prompts.addEmployeePrompts(getRoleArray, nameArray).then((response) => {
            employee = response;
            

            
            db.query('SELECT CONCAT(first_name," ", last_name) AS name, id FROM employees', async function(err, result){
              for(const element of result){
                if(employee.employeeManager == element.name){
                  managerIndex = element.id;
                }

              }

              db.query('SELECT * FROM roles', async function (err, results) {
                employeeTable = results;
                
          
                for(const element of employeeTable){
                  if(element.job_title == employee.employeeRole){
                    
                    employeeIndex = element.id;
                    
                  }
                }
          
                db.query(await queries.addEmployee(employee, employeeIndex, managerIndex) , function (err, results) {
                  console.log("Employee Added");
                  init();
                })
              })
            })
          })
        })
      }

      getNames();
    })
  }

 //---------------------------------------Update Employee Role----------------------------------------

  async function getRoles(){

    let nameArray = [];

    db.query('SELECT job_title FROM roles',  async function (err,results){
      for(const element of results){
        
        roleArray.push(element.job_title);

      }

      async function getNames(){

        let result;
        
        db.query('SELECT first_name, last_name FROM employees', async function (err,results){
  
          
  
          for(const element of results){
  
              let fullName = element.first_name + " " + element.last_name;
              nameArray.push(fullName);
          }


          //-----------wait for prompts completion, and store result (name and job id) as array------
          await prompts.updateEmployeePrompts(nameArray, roleArray).then((response) => {
  
          result = response;  
  
          const splitName = result.selectEmployee.split(' ');
          const firstName = splitName[0];
          const lastName = splitName[1];
          let updateIndex;

            //---------generate roles table and look for similar first and last names------
  
          db.query('SELECT * FROM roles', async function (err, results) {
            updateTable = results;
            
  
            for(const element of updateTable){
              if(result.selectRole == element.job_title){
                updateIndex =  element.id;
              }
            }
  
            db.query(await queries.updateEmployeeRole(firstName, lastName, updateIndex) , function (err, results) {

              console.log("Employee Updated!");
              init();
            })

          })
  
          });
        })
  
      }

      getNames();
      
    })

  }




 //--------------------Initiate Application------------------------
async function init(){

  await masterSwitch();

}

init();








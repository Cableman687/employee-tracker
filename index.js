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
  let roleTable;
  let roleIndex;
  let employeeTable;
  let employeeIndex;
  let updateTable;
  let updateIndex;
  let roleArray = [];

  console.log(welcomeRequest.welcomePrompts);

  switch(welcomeRequest.welcomePrompts) {

    

    case "View All Departments":
      db.query(await queries.viewDepartments(), function (err, results) {
      console.table(results);
      })
      break;

    case "View All Roles":
      db.query(await queries.viewRoles(), function (err, results) {
      console.table(results);
      })
      break;
    
    case "View All Employees":
      db.query(await queries.viewEmployees() , function (err, results) {
      console.table(results);
      })
      break;
    
    case "Add Department":
      db.query(await queries.addDepartment() , function (err, results) {
      console.log("Department Added");
      })
      break;
    
    case "Add Role":
      let role = await prompts.addRolePrompts();
      // console.log(role.roleDepartment);

      db.query('SELECT * FROM departments', async function (err, results) {
        roleTable = results;
        // console.log(roleTable);
  
        for(const element of roleTable){
          if(element.department_name == role.roleDepartment){
            
            roleIndex = element.id;
            // console.log(roleIndex);
          }
        }

        db.query(await queries.addRole(role, roleIndex) , function (err, results) {
          console.log("Role Added");
        })
      })
        
    
    break;
    
    case "Add Employee":

    async function getManagers(){
      let getRoleArray = [];

      db.query('SELECT job_title FROM roles', async function(err,results){
        for(const element of results){
          getRoleArray.push(element.job_title);
        }

        async function getNames(){
          let result;
          let nameArray = [];

          db.query('SELECT first_name, last_name FROM employees', async function (err, results){
            for(const element of results){
              let fullName = element.first_name + " " + element.last_name;
              nameArray.push(fullName);
            }

            await prompts.addEmployeePrompts(getRoleArray, nameArray).then((response) => {
              employee = response;

              db.query('SELECT * FROM roles', async function (err, results) {
                employeeTable = results;
                // console.log(employeeTable);
          
                for(const element of employeeTable){
                  if(element.job_title == employee.employeeRole){
                    
                    employeeIndex = element.id;
                    // console.log(employeeIndex);
                  }
                }
          
                db.query(await queries.addEmployee(employee, employeeIndex) , function (err, results) {
                  console.log("Role Added");
                })
              })



            })
          })
        }

        getNames();
      })
    }

    await getManagers();
    // let employee = await prompts.addEmployeePrompts();
    // console.log(employee.employeeRole)



    break;

    case "Update Employee Role":

    //-------get fullnames as array and incorporate into prompts--------

    let nameArray = [];
      
    async function getRoles(){
      db.query('SELECT job_title FROM roles',  async function (err,results){
        for(const element of results){
          
          roleArray.push(element.job_title);

          console.log(element.job_title);

        }

        async function getNames(){

          let result;
          
          console.log(roleArray);
    
          db.query('SELECT first_name, last_name FROM employees', async function (err,results){
    
            console.log(results);
    
            for(const element of results){
    
                let fullName = element.first_name + " " + element.last_name;
                nameArray.push(fullName);
            }
            
            console.log(nameArray);
    
            
    
            //-----------wait for prompts completion, and store result (name and job id) as array------
            await prompts.updateEmployeePrompts(nameArray, roleArray).then((response) => {
    
            result = response;
    
            console.log(result);
    
            const splitName = result.selectEmployee.split(' ');
            const firstName = splitName[0];
            const lastName = splitName[1];
            let updateIndex;

    
            // console.log(firstName);
            // console.log(lastName);
    
              //---------generate roles table and look for similar first and last names------
    
            db.query('SELECT * FROM roles', async function (err, results) {
              updateTable = results;
              console.log(updateTable);
    
              for(const element of updateTable){
                if(result.selectRole == element.job_title){
                  updateIndex =  element.id;
                }
              }
    
              // console.log(firstName);
              // console.log(lastName);
              // console.log(updateIndex);
    
              db.query(await queries.updateEmployeeRole(firstName, lastName, updateIndex) , function (err, results) {
                console.log("Role Added");
              })

            })
    
            });
          })
    
        }

        getNames();
        
      })

    }

    getRoles();

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


const inquirer = require('inquirer');
const mysql = require('mysql2');

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

//-----------------------Welcome Screen Prompts-------------------------

async function welcomePrompts() {

    let welcomeResponse;
    
    await inquirer.prompt([

        {
            type: 'list',
            name: 'welcomePrompts',
            message: 'What would you like to do? ',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
 
            ],
            default: 'I dont want to add any more team members'     
        },
    ])
    .then((userChoice) => {

        welcomeResponse = userChoice;

    }

    
)
return Promise.resolve(welcomeResponse);
}

//-----------------------Add Department Prompts-------------------------

async function addDepartmentPrompts() {

    let departmentResponse;
    
    await inquirer.prompt([

        {
            type: 'input',
            name: 'addDepartmentPrompts',
            message: 'What is the name of the department? ',
            default: 'None'     
        },
    ])
    .then((userChoice) => {

        departmentResponse = userChoice;

    }

    
)
return Promise.resolve(departmentResponse);
}

//-----------------------Add Role Prompts-------------------------

async function addRolePrompts() {

    let roleResponse;
    
    await inquirer.prompt([

        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the Role? ',
            default: 'default'     
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the Role? ',
            default: '0'     
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'Which department does the role belong to? ',
            choices: [
                'Sales',
                'Engineering',
                'Finance',
                'Legal',
            ],
            default: 'default'     
        },
    ])
    .then((response) => {

        roleResponse = response;

    }

    
)
return Promise.resolve(roleResponse);
}

//-----------------------Add Employee Prompts-------------------------

async function addEmployeePrompts(roleList, managerList) {

    let employeeResponse;
    
    await inquirer.prompt([

        {
            type: 'input',
            name: 'employeeFirstName',
            message: 'What is the employees first name? ',
            default: 'default'     
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'What is the employees last name? ',
            default: '0'     
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is the employees role? ',
            choices: roleList,
            default: 'default'     
        },
        {
            type: 'list',
            name: 'employeeManager',
            message: 'Who is the employees manager? ',
            choices: managerList,
            default: 'None'     
        },
    ])
    .then((response) => {

        employeeResponse = response;

    }

    
)
return Promise.resolve(employeeResponse);
}

//-----------------------Update Employee Role Prompts-------------------------


async function updateEmployeePrompts(nameArray, roleArray) {

    let updateResponse;

    await inquirer.prompt([

        {
            type: 'list',
            name: 'selectEmployee',
            message: 'Which employees role would you like to update? ',
            choices: nameArray,
            default: 'default'     
        },
        {
            type: 'list',
            name: 'selectRole',
            message: 'Which role do you want to assign the selected employee? ',
            choices: roleArray,
            default: 'None'     
        },
    ])
    .then((response) => {

        updateResponse = response;

        console.log("Updated Employee's Role");

    }

    
    )

    

    return Promise.resolve(updateResponse);
    
}



//---------------------------Exports--------------------------------
module.exports = {welcomePrompts, addDepartmentPrompts, addRolePrompts, addEmployeePrompts, updateEmployeePrompts};
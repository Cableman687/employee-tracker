const inquirer = require('inquirer');

//-----------------------Welcome Screen Prompts-------------------------

async function welcomePrompts() {

    let welcomeResponse;
    
    
   
    
    await inquirer.prompt([

        {
            type: 'list',
            name: 'masterPrompts',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add Department',
                'Add Role',
                'Add Employee',
                'Update Employee Role',
 
            ],
            default: 'View All Departments'    
        },
    ])
    .then((masterPrompts) => {

        welcomeResponse = masterPrompts;

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
                 
        },
    ])
    .then((userChoice) => {

        departmentResponse = userChoice;

    }

    
)
return Promise.resolve(departmentResponse);
}

//-----------------------Add Role Prompts-------------------------

async function addRolePrompts(departmentArray) {

    let roleResponse;
    
    await inquirer.prompt([

        {
            type: 'input',
            name: 'roleName',
            message: 'What is the name of the Role? ',
                 
        },
        {
            type: 'input',
            name: 'roleSalary',
            message: 'What is the salary of the Role? ',
               
        },
        {
            type: 'list',
            name: 'roleDepartment',
            message: 'Which department does the role belong to? ',
            choices: departmentArray,
                 
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
                 
        },
        {
            type: 'input',
            name: 'employeeLastName',
            message: 'What is the employees last name? ',
                 
        },
        {
            type: 'list',
            name: 'employeeRole',
            message: 'What is the employees role? ',
            choices: roleList,
                 
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
                 
        },
        {
            type: 'list',
            name: 'selectRole',
            message: 'Which role do you want to assign the selected employee? ',
            choices: roleArray,
                
        },
    ])
    .then((response) => {

        updateResponse = response;

        

    }

    
    )

    

    return Promise.resolve(updateResponse);
    
}



//---------------------------Exports--------------------------------
module.exports = {welcomePrompts, addDepartmentPrompts, addRolePrompts, addEmployeePrompts, updateEmployeePrompts};
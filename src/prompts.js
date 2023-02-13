const inquirer = require('inquirer');

async function welcomePrompts() {

    let welcomeResponse;
    
    await inquirer.prompt([

        {
            type: 'list',
            name: 'welcomePrompts',
            message: 'What would you like to do? ',
            choices: [
                'View All Employees',
                'Add Employee',
                'Update Employee Role',
                'View All Roles',
                'Add Role',
                'View All Departments',
                'Add Department',
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



//---------------------------Exports--------------------------------
module.exports = {welcomePrompts};
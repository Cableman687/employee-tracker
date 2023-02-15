
async function viewDepartments(){

    const queryString = "SELECT * FROM departments;";

    return queryString;

}

async function viewRoles(){

    const queryString = "SELECT * FROM roles;";

    return queryString;

}

async function viewEmployees() {

    const queryString = "SELECT * FROM employees;";

    return queryString;

}

async function addDepartment(){



}

async function addRole(){

}

async function addEmployee(){
   
}

async function updateEmployeeRole() {

}


module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole};
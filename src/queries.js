
const prompts = require("./prompts");

//---------------------------------Functions----------------------------------

async function viewDepartments(){

    const queryString = "SELECT id, department_name AS Name FROM departments;";

    return queryString;

}

async function viewRoles(){

    const queryString = `SELECT
    roles.id, roles.job_title AS Title, departments.department_name AS Department, roles.salary AS Salary
    FROM roles 
    JOIN departments ON roles.department_id = departments.id`;

    return queryString;

}

async function viewEmployees() {

    const queryString = `SELECT 
    first.id, first.first_name, first.last_name, roles.job_title , departments.department_name AS department, roles.salary, CONCAT(second.first_name,' ', second.last_name) AS manager
    FROM employees first 
    JOIN roles ON first.role_id = roles.id 
    JOIN departments ON departments.id = roles.department_id
    JOIN employees second ON first.manager_id = second.id;`;

    return queryString;

}



async function addDepartment(){

    let department = await prompts.addDepartmentPrompts();

    const queryString = `INSERT INTO departments (department_name)
    VALUES ("${department.addDepartmentPrompts}")`;

    return queryString;

}

async function addRole(role, roleIndex){

    const queryString = `INSERT INTO roles (job_title, department_id, salary)
    VALUES ("${role.roleName}",${roleIndex}, ${role.roleSalary}.00)`;

    return queryString;

}

async function addEmployee(employee, employeeIndex, managerIndex){


    const queryString = `INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES ("${employee.employeeFirstName}", "${employee.employeeLastName}", ${employeeIndex}, ${managerIndex});`;

    return queryString;
   
}

async function updateEmployeeRole(firstName, lastName, updateIndex) {

    const queryString = `UPDATE employees
    SET role_id = ${updateIndex}
    WHERE first_name = "${firstName}"
    AND last_name = "${lastName}";`;

    return queryString;

}


module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole};
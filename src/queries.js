
const prompts = require("./prompts");
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
  


//---------------------------------Functions----------------------------------

async function viewDepartments(){

    const queryString = "SELECT * FROM departments;";

    return queryString;

}

async function viewRoles(){

    const queryString = `SELECT
    roles.id, roles.job_title, departments.department_name, roles.salary 
    FROM roles 
    JOIN departments ON roles.department_id = departments.id`;

    return queryString;

}

async function viewEmployees() {

    // const queryString = `SELECT 
    // first.id, first.first_name, first.last_name, roles.job_title , departments.department_name, roles.salary, first.manager_id
    // FROM employees first 
    // JOIN roles ON first.role_id = roles.id 
    // JOIN departments ON departments.id = roles.department_id;`;

    const queryString = `SELECT 
    first.id, first.first_name, first.last_name, roles.job_title , departments.department_name, roles.salary, second.first_name AS manager
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

    console.log(role.roleName);
    console.log(roleIndex);
    console.log(role.roleSalary);

    const queryString = `INSERT INTO roles (job_title, department_id, salary)
    VALUES ("${role.roleName}",${roleIndex}, ${role.roleSalary}.00)`;

    return queryString;

}

async function addEmployee(employee, employeeIndex){

    console.log(employee.employeeFirstName);
    console.log(employee.employeeLastName);
    console.log(employeeIndex);


    const queryString = `INSERT INTO employees (first_name, last_name, role_id)
    VALUES ("${employee.employeeFirstName}", "${employee.employeeLastName}", ${employeeIndex});`;

    return queryString;
   
}

async function updateEmployeeRole(firstName, lastName, updateIndex) {

    
    console.log(firstName);
    console.log(lastName);
    console.log(updateIndex);

    const queryString = `UPDATE employees
    SET role_id = ${updateIndex}
    WHERE first_name = "${firstName}"
    AND last_name = "${lastName}";`;

    return queryString;

}


module.exports = {viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole};
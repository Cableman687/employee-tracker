DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;


CREATE TABLE departments (

    id INT NOT NULL PRIMARY KEY,
    department_name VARCHAR(30) NOT NULL
   

    
);

CREATE TABLE roles (

    id              INT                         PRIMARY KEY,
    job_title       VARCHAR(30)     NOT NULL,
    department_id   INT             NOT NULL,
    salary          DECIMAL         NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES departments(id)
    
    
    

);

CREATE TABLE employees (

    id              INT             NOT NULL    PRIMARY KEY,
    first_name      VARCHAR(30)     NOT NULL,
    last_name       VARCHAR(30)     NOT NULL,
    role_id         INT             NOT NULL,
    manager_id      INT             NOT NULL,
    FOREIGN KEY (role_id)
    REFERENCES roles(id)
    -- FOREIGN KEY(manager_id)
    -- REFERENCES employees(employee_id)
    

);

-- job_title       VARCHAR(30)     NOT NULL,
-- department      VARCHAR(30)     NOT NULL,
-- salary          INT             NOT NULL,
-- manager         VARCHAR(30)     NOT NULL



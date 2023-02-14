DROP DATABASE IF EXISTS tracker_db;
CREATE DATABASE tracker_db;
USE tracker_db;


CREATE TABLE departments (

    department_id INT NOT NULL,
    department_name VARCHAR(30) NOT NULL
    
);

CREATE TABLE roles (

    role_id         INT             NOT NULL,
    job_title       VARCHAR(30)     NOT NULL,
    department      VARCHAR(30)     NOT NULL,
    salary          INT             NOT NULL

);

CREATE TABLE employees (

    employee_id     INT             NOT NULL,
    first_name      VARCHAR(30)     NOT NULL,
    last_name       VARCHAR(30)     NOT NULL,
    job_title       VARCHAR(30)     NOT NULL,
    department      VARCHAR(30)     NOT NULL,
    salary          INT             NOT NULL,
    manager         VARCHAR(30)     NOT NULL

);



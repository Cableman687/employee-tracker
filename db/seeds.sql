INSERT INTO departments (department_name)
    VALUES  ("Sales"),
            ("Engineering"),
            ("Finance"),
            ("Legal");

INSERT INTO roles (job_title, department_id, salary)
    VALUES  ("Sales Lead", 1, 100000.00),
            ("Salesperson", 1, 80000.00),
            ("Lead Engineer", 2, 150000.00),
            ("Software Engineer", 2, 120000.00),
            ("Account Manager", 3, 160000.00),
            ("Accountant", 3, 125000.00),
            ("Legal Team Lead", 4, 250000.00),
            ("Lawyer", 4, 190000.00);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
    VALUES  ("John", "Doe", 1, 1),
            ("Mike", "Chan", 2, 2),
            ("Ashley", "Rodriguez", 3, 1),
            ("Kevin", "Kunal", 4, 2),
            ("Malia", "Brown", 5, 1),
            ("Sarah", "Lourd", 6, 2),
            ("Tom", "Allen", 7, 1),
            ("Kunal", "Singh", 8, 2);






-- Manager Name List:
-- None
-- John Doe
-- Mike Chan
-- Ashley Rodriguez
-- Kevin Tupik
-- Kunal Singh
-- Malia Brown


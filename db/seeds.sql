INSERT INTO departments (id, department_name)
    VALUES  (1, "Sales"),
            (2, "Engineering"),
            (3, "Finance"),
            (4, "Legal");

INSERT INTO roles (id, job_title, department_id, salary)
    VALUES  (1, "Sales Lead", 1, 100000.00),
            (2, "Salesperson", 1, 80000.00),
            (3, "Lead Engineer", 2, 150000.00),
            (4, "Software Engineer", 2, 120000.00),
            (5, "Account Manager", 3, 160000.00),
            (6, "Accountant", 3, 125000.00),
            (7, "Legal Team Lead", 4, 250000.00),
            (8, "Lawyer", 4, 190000);

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
    VALUES  (1, "John", "Doe", 5, 7),
            (2, "John", "Doe", 5, 7),
            (3, "John", "Doe", 5, 7),
            (4, "John", "Doe", 5, 7),
            (5, "John", "Doe", 5, 7),
            (6, "John", "Doe", 5, 7),
            (7, "John", "Doe", 5, 7),
            (8, "John", "Doe", 5, 7);






-- Manager Name List:
-- None
-- John Doe
-- Mike Chan
-- Ashley Rodriguez
-- Kevin Tupik
-- Kunal Singh
-- Malia Brown


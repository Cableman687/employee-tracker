INSERT INTO departments (department_id, department_name)
    VALUES  (1, "Sales"),
            (2, "Engineering"),
            (3, "Finance"),
            (4, "Legal");

INSERT INTO roles (role_id, job_title, department, salary)
    VALUES  (1, "Sales Lead", "Sales", 100000),
            (2, "Salesperson", "Sales", 80000),
            (3, "Lead Engineer", "Engineering", 150000),
            (4, "Software Engineer", "Engineering", 120000),
            (5, "Account Manager", "Finance", 160000),
            (6, "Accountant", "Finance", 125000),
            (7, "Legal Team Lead", "Legal", 250000),
            (8, "Lawyer", "Legal", 190000);

INSERT INTO employees (employee_id, first_name, last_name, job_title, department, salary, manager)
    VALUES  (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan"),
            (1, "John", "Doe", "Sales Lead", "Sales", 100000, "Mike Chan");






-- Manager Name List:
-- None
-- John Doe
-- Mike Chan
-- Ashley Rodriguez
-- Kevin Tupik
-- Kunal Singh
-- Malia Brown
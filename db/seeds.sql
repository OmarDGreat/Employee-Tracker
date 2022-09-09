USE employee_db;

INSERT INTO department (id, name)
VALUES
(1, 'Sales'),
(2, 'Engineering'),
(3, 'Finance'),
(4, 'Legal');

INSERT INTO role (id, title, salary, department_id)
VALUES
(1, 'Sales Lead', 100000, 1),
(2, 'Salesperson', 80000, 1),
(3, 'Lead Engineer', 200000, 2),
(4, 'Software Engineer', 180000, 2),
(5, 'Accountant', 125000, 3),
(6, 'Legal Team Lead', 200000, 4),
(7, 'Lawyer', 180000, 4);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES
(1, 'John', 'Yeet', 1, NULL),
(2, 'Jane', 'Cramer', 2, NULL),
(3, 'Bob', 'Haren', 3, NULL),
(4, 'Sally', 'Stone', 4, NULL),
(5, 'Mary', 'Blank', 5, NULL),
(6, 'Steve', 'Dorsee', 6, NULL),
(7, 'Bill', 'Zen', 7, NULL);
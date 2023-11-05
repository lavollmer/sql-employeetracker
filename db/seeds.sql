INSERT INTO department (id, name)
VALUES (1, 'Engineering'),
       (2, 'Marketing'),
       (3, 'Finance'),
       (4, 'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES (5, 'Sales Lead', 150000,4),
       (6, 'Salesperson', 70000, 4),
       (7, 'Software Engineer', 100000, 1),
       (8, 'Senior Accounting Analyst', 120000, 3),
        (9, 'Accountant', 100000, 3 ),
        (10, 'Social Media Manager', 110000, 2),
        (11, 'Marketing Intern', 300000, 2);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (12, 'Denise', 'Letter', 1, 1),
       (13, 'Patricia', 'Puzzles', 2, 2),
       (14, 'Jake', 'Jaens', 3, 3),
       (15, 'Louise', 'Loeide', 4, 4),
       (16, 'Sam', 'Square', 5, 5),
        (17, 'Olive', 'Owenser', 6, 6),
        (18, 'Rita', 'Swan', 7, 7);

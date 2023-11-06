USE business_db;

INSERT INTO department (d_name)
VALUES ('Engineering'),
       ('Marketing'),
       ('Finance'),
       ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Sales Lead', 150000,4),
       ('Salesperson', 70000, 4),
       ('Software Engineer', 100000, 1),
       ('Senior Accounting Analyst', 120000, 3),
        ('Accountant', 100000, 3 ),
        ('Social Media Manager', 110000, 2),
        ('Marketing Intern', 300000, 2);
       
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ('Denise', 'Letter', 1, 2),
       ('Patricia', 'Puzzles', 2, 0),
       ('Jake', 'Jaens', 3, 0),
       ('Louise', 'Loeide', 4, 0),
       ('Sam', 'Square', 5, 4),
        ('Olive', 'Owenser', 6, 0),
        ('Rita', 'Swan', 7, 6);
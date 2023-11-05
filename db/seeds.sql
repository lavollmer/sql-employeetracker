USE business_db;

INSERT INTO department (id, d_name)
VALUES ('Engineering'),
       ('Marketing'),
       ('Finance'),
       ('Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES ('Sales Lead', 150000,4),
       ('Salesperson', 70000, 4),
       ('Software Engineer', 100000, 1),
       ('Senior Accounting Analyst', 120000, 3),
        ('Accountant', 100000, 3 ),
        ('Social Media Manager', 110000, 2),
        ('Marketing Intern', 300000, 2);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES ('Denise', 'Letter', 1, 1),
       ('Patricia', 'Puzzles', 2, 2),
       ('Jake', 'Jaens', 3, 3),
       ('Louise', 'Loeide', 4, 4),
       ('Sam', 'Square', 5, 5),
        ('Olive', 'Owenser', 6, 6),
        ('Rita', 'Swan', 7, 7);

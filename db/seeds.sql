INSERT INTO department (id, d_name)
VALUES (1,'Engineering'),
       (2,'Marketing'),
       (3,'Finance'),
       (4,'Sales');

INSERT INTO role (id, title, salary, department_id)
VALUES (1,'Sales Lead', 150000,4),
       (2,'Salesperson', 70000, 4),
       (3,'Software Engineer', 100000, 1),
       (4,'Senior Accounting Analyst', 120000, 3),
        (5,'Accountant', 100000, 3 ),
        (6,'Social Media Manager', 110000, 2),
        (7,'Marketing Intern', 300000, 2);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1,'Denise', 'Letter', 1, 1),
       (2,'Patricia', 'Puzzles', 2, 2),
       (3,'Jake', 'Jaens', 3, 3),
       (4,'Louise', 'Loeide', 4, 4),
       (5,'Sam', 'Square', 5, 5),
        (6,'Olive', 'Owenser', 6, 6),
        (7,'Rita', 'Swan', 7, 7);
INSERT INTO department (id, name)
VALUES (1, "Engineering"),
       (2, "Marketing"),
       (3, "Leadership"),
       (4, "Finance");

INSERT INTO role (id, title, salary, department_id)
VALUES (1, "Sales Lead", 150000),
       (2, "Salesperson", 70000),
       (3, "Software Engineer", 100000),
       (4, "Account Manager", 120000),
        (5, "Accountant", 100000),
        (6, "Social Media Manager", 110000),
        (7, "CEO", 300000);
       
INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, "Denise", "Letter"),
       (2, "Patricia", "Puzzles"),
       (3, "Jake", "Jaens"),
       (4, "Louise", "Loeide"),
       (5, "Sam", "Square"),
        (6, "Olive", "Owenser"),
        (7, "Rita", "Swan"),
       (8, "Myra", "Macchiato");
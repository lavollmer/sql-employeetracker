DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;

USE business_db;

-- create table department --
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  d_name VARCHAR(30) NOT NULL
);

-- create table role --
CREATE TABLE role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INT NOT NULL
);

-- create table employee --
CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT NOT NULL,
    manager_id INT NOT NULL,
-- if the role id is deleted then the employee is deleted --
    FOREIGN KEY (role_id) REFERENCES role(id) ON DELETE CASCADE
    FOREIGN KEY (manager_id) REFERENCES role(id) ON DELETE SET NULL
);

-- select role table title and employee table first name
SELECT r.title, e.first_name
-- from role table --
FROM role r
-- inner join employee table on role id with role table id and employee table role id
INNER JOIN employee e ON role_id = e.role_id;

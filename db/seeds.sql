INSERT INTO department (name)
VALUES ("Sales"),
("Engineering"),
("Customer Support");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesperson", 60000, 1),
("Sales Team Lead", 80000, 1),
("Engineer", 80000, 2),
("Engineering Team Lead", 90000, 2),
("Customer Support Associate", 40000, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Julia", "Child", 2, NULL),
("Jane", "Doe", 1, 1),
("Judy", "Garland", 4, NULL),
("Kate", "Mulgrew", 3, 3),
("Roxanne", "Dawson", 3, 3),
("Lauren", "Lane", 5, NULL),
("Francine", "Drescher", 5, NULL);
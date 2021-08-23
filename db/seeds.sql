-- TODO: --
-- Figure out how to insert foreign keys into seeds --
-- Figure out how to best set managers and their subordinates --
INSERT INTO department (name)
VALUES ("Sales"),
("Engineering"),
("Customer Support");

INSERT INTO role (title, salary)
VALUES ("Salesperson", 60000),
("Engineer", 80000),
("Customer Support Associate", 40000);

INSERT INTO employee (first_name, last_name)
VALUES ("Jane", "Doe"),
("Julia", "Child"),
("Judy", "Garland"),
("Kate", "Mulgrew"),
("Roxanne", "Dawson"),
("Lauren", "Lane"),
("Francine", "Drescher");
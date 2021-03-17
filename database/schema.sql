DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(

	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT false,
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id)
);


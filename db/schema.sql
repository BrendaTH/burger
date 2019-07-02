-- Drops the burger_db if it exists currently --
DROP DATABASE IF EXISTS burger_db;
-- Creates the "burger_db" database --
CREATE DATABASE burger_db;

USE burger_db;

-- Created the table "burgers"
CREATE TABLE burgers (
  id INTEGER AUTO_INCREMENT NOT NULL,
  burger_name VARCHAR(30) NOT NULL,
  devoured BOOLEAN NOT NULL,
  PRIMARY KEY(id)
);



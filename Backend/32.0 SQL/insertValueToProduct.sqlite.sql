-- TABLE
CREATE TABLE demo (ID integer primary key, Name varchar(20), Hint text );
CREATE TABLE product(
  id int NOt NULL,
  Name STRING,
  Price MONEY,
  PRIMARY KEY(id)
);
 
-- INDEX
-- INSERT product to the database
INSERT INTO product
VALUES(1, "Pen", 2.0)
VALUES(2, "Copy", 7.0)
VALUES(3, "Book", 10.0)
-- TRIGGER
 
-- VIEW
-- Show the table 
 SELECT * FROM product 

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

-- insert only id and name to the product
INSERT INTO product(id, Name)
VALUES(4, "Book")
-- TRIGGER
 
-- VIEW
-- Show the whole table 
 SELECT * FROM product 

-- Show the specific name and price table 
SELECT Name, price  FROM 'product' 

-- Show the specific id of table 
SELECT * FROM product 
WHERE id=1

-- Update specific id of the data
UPDATE product
set price = 0.8
WHERE id = 4

/* =SQL ALTER TABLE Statement
The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.
OR 
The ALTER TABLE statement is also used to add and drop various constraints on an existing table.
 */
ALTER TABLE product
ADD stock INT
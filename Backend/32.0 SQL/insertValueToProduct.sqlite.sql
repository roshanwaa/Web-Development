-- TODO: SQL Commands: CREATE Table and INSERT Data

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
 

--  TODO: SQL Commands: READ, SELECT, and WHERE
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


-- TODO: Updating Single Values and Adding Columns in SQL
/* =SQL ALTER TABLE Statement
The ALTER TABLE statement is used to add, delete, or modify columns in an existing table.
OR 
The ALTER TABLE statement is also used to add and drop various constraints on an existing table.
 */
ALTER TABLE product
ADD stock INT


-- TODO:  SQL Commands: DELETE
DELETE FROM product
WHERE  id = 5

-- TODO:  FOREIGN KEY Constraint
/* The FOREIGN KEY constraint is used to prevent actions that would destroy links between tables.

A FOREIGN KEY is a field (or collection of fields) in one table, that refers to the PRIMARY KEY in another table.

The table with the foreign key is called the child table, and the table with the primary key is called the referenced or  */

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    FOREIGN KEY (PersonID) REFERENCES Persons(PersonID)
);

SQL Server / Oracle / MS Access:

CREATE TABLE Orders (
    OrderID int NOT NULL PRIMARY KEY,
    OrderNumber int NOT NULL,
    PersonID int FOREIGN KEY REFERENCES Persons(PersonID)
);

-- To allow naming of a FOREIGN KEY constraint, and for defining a FOREIGN KEY constraint on multiple columns, use the following SQL syntax:

CREATE TABLE Orders (
    OrderID int NOT NULL,
    OrderNumber int NOT NULL,
    PersonID int,
    PRIMARY KEY (OrderID),
    CONSTRAINT FK_PersonOrder FOREIGN KEY (PersonID)
    REFERENCES Persons(PersonID)
);
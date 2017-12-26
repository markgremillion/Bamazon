CREATE DATABASE Bamazon2;
USE Bamazon2;

-- Create a table called 'products' which will contain the store inventory --
CREATE TABLE products (
	item_id INTEGER(11) AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(30) NOT NULL,
	department_name VARCHAR(20) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INTEGER(11) NOT NULL,
	PRIMARY KEY (item_id)
);

-- Insert data into the 'products' table --
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Egglands Best Eggs', 'Dairy', 3.75, 500),
		('Babybel Cheese', 'Dairy', 4.25, 627),
		('Kraft Cheese Snacks', 'Dairy', 4.99, 300),
		('Brawny Paper Towels', 'Grocery', 4.25, 400),
		('Heirloom Lettuce', 'Produce', 1.35, 800),
		('Chiquita Bannana', 'Produce', 0.20, 10000),
		('Tropicana Orange Juice', 'Grocery', 4.45, 267),
		('Grandmas Bread', 'Grocery', 2.50, 200),
		('Huggies Diapers', 'Children', 2.75, 476),
		('Charmin Toiler Paper', 'Grocery', 12.99, 575),
		('Sliced Strawberries', 'Frozen Food', 4.50, 423),
		('Healthy Choice Burger', 'Frozen Food', 5.75, 150),
		('Annie Chuns Mini Wontons', 'Frozen Food', 5.99, 89),
		('SeaPak Salmon Burgers', 'Frozen Food', 10.55, 120),
		('Hormel Deli Turkey', 'Meat', 5.88, 250),
		('Skinless Chicken Breast', 'Meat', 7.25, 157),
		('Triscuit Thin Crisps', 'Snacks', 5.50, 163),
		('Apple Sauce', 'Snacks', 4.95, 389),
		('Campbells Tomato Soup', 'Soups', 1.25, 550),
		('Monte Bene Tomato Pasta Sauce', 'Soups', 3.25, 432);
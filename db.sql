CREATE DATABASE yelp;

CREATE TABLE restaurants (
id BIGSERIAL NOT NULL,
name VARCHAR(50) NOT NULL,
location  VARCHAR(50) NOT NULL,
price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);




INSERT INTO restaurants (name, location, price_range) VALUES ('cracker barrel','flossmoor', 3),('chilis','homewood', 1), ('juanchos','chicago heights', 2) ;
DELETE FROM restaurants WHERE (price_range < 1 and price_range > 6)


UPDATE restaurants 
SET 
name ='chili''s',
price_range = 4
WHERE id = 23; 

SELECT * FROM restaurants;

UPDATE restaurants SET name = 'chili''s' WHERE id = 23;

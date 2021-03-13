CREATE DATABASE yelp;

CREATE TABLE restaurants (
id BIGSERIAL NOT NULL,
name VARCHAR(50) NOT NULL,
location VARCHAR(50) NOT NULL,
price_range INT NOT NULL check(price_range >=1 and price_range <=5)
);




INSERT INTO restaurants (name, location, price_range) VALUES ('pizza hut','matteson', 2);
DELETE FROM restaurants WHERE (price_range < 1 and price_range > 6)
CREATE DATABASE pernsesh;

CREATE TABLE sesh(

    sno SERIAL PRIMARY KEY,
    customer_name VARCHAR(255),
    age INT,
    phone VARCHAR(20),
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  );


DROP DATABASE if exists MovieList;
CREATE DATABASE MovieList;

USE MovieList;

CREATE TABLE Movies (
  movie_id INTEGER AUTO_INCREMENT,
  moviename VARCHAR(30) UNIQUE NOT NULL,
  watched BOOLEAN NOT NULL,
  PRIMARY KEY(movie_id)
);

-- CREATE TABLE Authentication (
--   user_id INTEGER AUTO_INCREMENT,
--   token VARCHAR(50),
--   PRIMARY KEY (user_id)
-- );
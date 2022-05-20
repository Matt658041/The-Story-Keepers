DROP DATABASE IF EXISTS story_keepers_db;

CREATE DATABASE story_keepers_db;

create table users (
    id integer auto_increment primary key,
    username VARCHAR(100),
    password VARCHAR(100),
    email VARCHAR(100)
);

create table rating (
    rated_by_user integer,
    rating integer
);
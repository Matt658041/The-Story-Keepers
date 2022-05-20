DROP DATABASE IF EXISTS story_keepers_db;

CREATE DATABASE story_keepers_db;

Table users (id (primary key), username, password, email)
Table rating (rated_by_user (foreign key), rated_user (foreign key), rating)

-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
	"id" SERIAL PRIMARY KEY,
	"user_name" VARCHAR (255) UNIQUE NOT NULL,
	"password" VARCHAR (255) NOT NULL,
	"experience" VARCHAR (50) NOT NULL,
	"squat_pr" INT, 
	"clean_jerk_pr" INT, 
	"front_squat_pr" INT, 
	"back_squat_pr" INT
);


CREATE TABLE "user_programs" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"programs_id" INT REFERENCES "programs"
);


CREATE TABLE "user_programs" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"programs_id" INT REFERENCES "programs"
);


CREATE TABLE "programs_exercises" (
	"id" SERIAL PRIMARY KEY,
	"program_id" INT REFERENCES "programs",
	"exercise_id" INT REFERENCES "exercises",
	"week" INT, 
	"day" INT
);


REATE TABLE "user_programs_exercises" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"programs_exercises_id" INT REFERENCES "programs",
	"status" INT 
);


CREATE TABLE "exercises" (
	"id" SERIAL PRIMARY KEY,
	"name" VARCHAR (250),
	"rep_scheme" VARCHAR (250),
	"notes" VARCHAR (500)
);
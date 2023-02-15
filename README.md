

# Knuckles Down

Duration: 2 Week Sprint

Knuckles Down is an Olympic Weightlifting training app that gives users access to a range of training programs (chosen by the user dependent on their goals) and a means to track their progress throughout the duration of the program. Users can view demo videos of exercises and mark them as complete or skipped. Users can also leave journal entries to record thoughts on that day's workout for future reference. 

## Prerequisites

Before you get started, make sure you have the following software installed on your computer:

- [Node.js](https://nodejs.org/en/)
- [PostrgeSQL](https://www.postgresql.org/)
- [Nodemon](https://nodemon.io/)


## Installation Instructions

- Fork the repository
- Copy the SSH key in your new repository
- In your terminal, run the command  `git clone {paste SSH link}`
- Navigate into the repository's folder in your terminal
- Open VS Code (or editor of your choice) and open the folder
- In your VS Code termanl, run `npm install` to install all dependencies
- Create a `.env` file at the root of the project and paste this line into the file:
  ```
  SERVER_SESSION_SECRET=superDuperSecret
  ```
  While you're in your new `.env` file, take the time to replace `superDuperSecret` with some long random string like `25POUbVtx6RKVNWszd9ERB9Bb6` to keep your application secure.
- Create a database named `knuckles_down` in PostgresSQL. If you would like to name your database something else, you will need to change animal_connections to the name of your new database name in server/modules/pool.js
You can also - 
  - Create a new database by running the following commands in your terminal:

```
        createdb knuckles_down
        sql -d knuckles_down -f database.sql
```
- In your VS code terminal, run `npm run server`
- Open up a second terminal and run `npm run client`
- Navigate to `localhost:3000`

## Technologies Used:

- JavaScript
- Node.js
- Express.js
- React.js
- Redux
- PostgreSQL
- HTML
- CSS
- Material UI 

## Acknowledgements

Thanks to Prime Digital Academy, who equipped me with the tools to make this application a reality and all my classmates for the support and inspiration.

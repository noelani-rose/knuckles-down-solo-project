const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const password = encryptLib.encryptPassword(req.body.password);
  const newUser = req.body
  const queryValues = [
    newUser.username,
    password,
    newUser.experience,
    newUser.personalRecords.snatch_pr,
    newUser.personalRecords.cleanjerk_pr,
    newUser.personalRecords.frontsquat_pr,
    newUser.personalRecords.backsquat_pr
  ]
  const queryText = `INSERT INTO "user" (username, password, experience, snatch_pr, cleanjerk_pr, front_squat_pr, back_squat_pr)
    VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING id`;
  pool
    .query(queryText, queryValues)
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/', rejectUnauthenticated, (req, res) => {
  const programId = req.body.data;
  // console.log('req.user.id is', req.user)

  const currentUser = req.user;
  console.log('what is req.user??', currentUser.id);
  console.log('the program id being posted is to server is', programId)

  const queryText = `
  INSERT INTO "user_programs" 
  ("user_id", "programs_id")
  VALUES ($1, $2);`;

  const sqlParams = [currentUser.id, programId]

  pool.query(queryText, sqlParams)
  .then((dbResult) => {
    res.sendStatus(200);
    consolelog('program id added to user_programs')
  })
  .catch((error) => {
    res.sendStatus(500);
    console.log('post program id to user_programs failed', error)
  })
})
// TODO: check out npm i http-status-codes
// StatusCode.INTERNAL_SERVER_ERROR



router.post('/programWeeks', (req, res) => {
  const {programId} = req.body;
  const sqlValues = [programId]
  // get weeks from db

  const sqlText = 
  `
  SELECT DISTINCT "programs_exercises".week from "programs_exercises"
  LEFT JOIN "user_programs" ON "user_programs".programs_id = "programs_exercises".program_id
  WHERE "user_programs".program_id = $1
  ORDER BY "programs_exercises".week;
  `;

  pool.query(sqlText, sqlValues)
  .then((dbResult) => {
    // console.log('what program info am i getting back from the user_programs table?', dbResult.rows)
    res.json(dbResult.rows)
        
  })
  .catch((error) => {
    console.log('error getting program weeks back from db', error)
  })
})



router.get('/week/:id', (req, res) => {
  console.log('what is the week id', req.body)
  console.log('am i getting the id of that week?', req.params.id)
  console.log('I AM IN THE ROUTER GET FUNCTION TO GET PROGRAM WEEKS')
  const userId = [req.user.id]
  console.log('what is the userid when getting program id', userId)
  const sqlText = 

  `
  SELECT 
  "programs"."name", "programs_exercises".week
  FROM "programs"
  JOIN "programs_exercises" ON "programs_exercises"."program_id" = "programs"."id"
  GROUP BY "programs"."name", "programs_exercises".week
  ORDER BY "programs_exercises"."week";
  `;


  pool.query(sqlText)
  .then((dbResult) => {
    // console.log('what program info am i getting back from the user_programs table?', dbResult.rows)
    res.send(dbResult.rows)
  })
  .catch((error) => {
    console.log('error getting program weeks back from db', error)
  })

})

router.get('/week/day/:id', (req, res) => {
  console.log('I AM IN THE ROUTER TO GET PROGRAM DAYS')

  const sqlText = 
  `
  SELECT 
  "programs"."name", "programs_exercises"."day"
  FROM "programs"
  JOIN "programs_exercises" ON "programs_exercises"."program_id" = "programs"."id"
  GROUP BY "programs"."name", "programs_exercises"."day"
  ORDER BY "programs_exercises"."day";
  `;

  pool.query(sqlText)
  .then((dbResult) => {
    // console.log('whats the result when trying to get back days', dbResult.rows)
    res.send(dbResult.rows)
  })
  .catch((error) => {
    console.log('error getting days back from db', error)
    res.sendStatus(500)
  })
})

router.get('/program/:program_id/week/:week_id/day/:day_id/exercises', (req, res) => {
  const sqlParams = [req.params.program_id, req.params.week_id, req.params.day_id]
  console.log('HELLO WORLD!!!!!!', req.params)
  console.log('I AM IN THE ROUTER TO GET DAY EXERCISES', req.params.week_id)

  const sqlText = 
`
SELECT *
FROM "programs_exercises"
JOIN "exercises" ON "programs_exercises".exercise_id = "exercises".id
WHERE "program_id" = $1 and "day" = $2 AND "week" = $3;
`;

// need to get rid of the WHERE WEEK = 1

pool.query(sqlText, sqlParams)
.then((dbResult) => {
  console.log('what exercises am i getting back from server', dbResult.rows)
  res.send(dbResult.rows)
})
.catch((error) => {
  console.log('error getting exercises back', error)
  res.sendStatus(500)
})
})













// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;

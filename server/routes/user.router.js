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

  console.log ('req.body is!!!!!!!', newUser)


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



router.get('/:week', (req, res) => {
  console.log('I AM IN THE ROUTER GET FUNCTION TO GET PROGRAM ID')
  const userId = [req.user.id]
  console.log('what is the userid when getting program id', userId)
  const sqlText = 

  `
SELECT 
"programs"."name", "programs".days_per_week, "programs".intensity, "programs".volume, "programs".good_for, "programs_exercises".week 
FROM "programs"
JOIN "programs_exercises" ON "programs_exercises"."program_id" = "programs"."id"
GROUP BY "programs"."name", "programs".days_per_week, "programs".intensity, "programs".volume, "programs".good_for, "programs_exercises".week 
ORDER BY "programs_exercises"."week";
`;

 
  // `
  // SELECT "programs_id"
  // FROM "user_programs"
  // WHERE "user_id" = $1;`;


  pool.query(sqlText)
  .then((dbResult) => {
    console.log('what program info am i getting back from the user_programs table?', dbResult.rows)
    res.send(dbResult.rows)
  })
  .catch((error) => {
    console.log('error getting program id back from user_programs', error)
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

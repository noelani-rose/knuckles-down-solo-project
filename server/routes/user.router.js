const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

router.get('/', rejectUnauthenticated, (req, res) => {
  res.send(req.user);
});

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
  const currentUser = req.user;
  console.log('the program id being posted is to server is', programId)
  const queryText = `
  INSERT INTO "user_programs" 
  ("user_id", "programs_id")
  VALUES ($1, $2);`;

  const sqlParams = [currentUser.id, programId]
  pool.query(queryText, sqlParams)
  .then((dbResult) => {
    res.sendStatus(200);
  })
  .catch((error) => {
    res.sendStatus(500);
    console.log('post program id to user_programs failed', error)
  })
})

router.get('/myProgram', rejectUnauthenticated, (req, res) => {
  const userId = [req.user.id]
  const sqlText = 
  // this should be where programs.id = to the one that was just selected, not user_id
  `
  SELECT * FROM "programs"
  JOIN "user_programs" ON "user_programs".programs_id = "programs".id
  WHERE "user_id" = $1;
  `; 
  pool.query(sqlText, userId)
  .then(dbResult => {
    res.send(dbResult.rows)
  })
  .catch(error => {
    console.log('error getting all programs', error)
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

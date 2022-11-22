const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/program/:programId/week/:weekId/day/:dayId', rejectUnauthenticated, (req, res) => {

  const sqlParams = [req.user.id, req.params.weekId, req.params.dayId, req.params.programId]
  const queryText = 
`
SELECT
"exercises".id,
"exercises"."name", 
"exercises".rep_scheme, 
"exercises".notes, 
"programs_exercises"."week",
"programs_exercises"."day", 
user_info.status
FROM
"exercises"
LEFT JOIN "programs_exercises" ON "programs_exercises".exercise_id = "exercises".id
LEFT JOIN (
	SELECT status, programs_exercises_id
	FROM 
	"user_programs_exercises"
	WHERE user_id = $1
) user_info ON user_info.programs_exercises_id = programs_exercises.id
WHERE "programs_exercises"."week" = $2 
AND "programs_exercises"."day" = $3 
AND "programs_exercises".program_id = $4
ORDER BY "week", "day", "exercises".id;
`;

  pool.query(queryText, sqlParams)
  .then(dbResult => {
    res.send(dbResult.rows)
    console.log('what is the result from exercises db', dbResult.rows)
  })
  .catch(error => {
    console.log('error getting all programs', error)
    res.sendStatus(500)
  })
});



router.put('/update', (req, res) => {
  console.log('trying to edit this table in router with req.body', req.body)
  const sqlParams = [req.user.id, req.body.week, req.body.day, req.body.status, req.body.program_id, req.body.exercise_id]
  const sqlText = 
  `
  INSERT INTO "user_programs_exercises" ("user_id", "week", "day", "status", "programs_id", "programs_exercises_id")
  VALUES ($1, $2, $3, $4, $5, $6)
  ON CONFLICT ("programs_exercises_id")
  DO UPDATE SET "status" = $4
  WHERE "user_programs_exercises"."user_id" = $1;
  `;

  pool.query(sqlText, sqlParams)
    .then(dbResult => {
      res.sendStatus(200)
    })
    .catch(error => {
      console.log('error updating table for status in server', error)
    })
});

router.get('/update', (req, res) => {
  console.log('in the router trying to get the exercise status')
  const sqlText = 
  `
  SELECT * FROM "user_programs_exercises"
  WHERE user_id = $1;
  `;
  pool.query(sqlText, [req.user.id])
    .then(dbResult => {
      res.send(dbResult.rows)
      console.log('whats the status of exercises coming back from db', dbResult.rows)
    })
    .catch(error => {
      console.log('error getting the exercise status back from the db', error)
    })
})

module.exports = router;

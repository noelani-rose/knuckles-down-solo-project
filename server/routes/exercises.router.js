const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */


// /api/exercises/${action.payload.programId}/week/${action.payload.weekId}/day/${action.payload.dayId}


router.get('/program/:programId/week/:weekId/day/:dayId/exercises', (req, res) => {

  const sqlParams = [req.params.weekId, req.params.dayId, req.params.programId]
  console.log('what is sqlParams when im in the exercises router', sqlParams)
  // GET route code here
  const queryText = `
  SELECT 
  JSON_AGG("exercises") as exercises,
  "programs_exercises"."week",
  "programs_exercises"."day"
  FROM
  "programs"
  LEFT JOIN "programs_exercises" ON "programs_exercises"."program_id" = "programs"."id"
  LEFT JOIN "exercises" ON "programs_exercises"."exercise_id" = "exercises"."id"
  LEFT JOIN "user_programs" ON "user_programs"."programs_id" = "programs"."id"
  WHERE "programs_exercises"."week" = $1 
  AND "programs_exercises"."day" = $2 
  AND "programs_exercises".program_id = $3
  GROUP BY "programs"."id", "programs_exercises"."week",
  "programs_exercises"."day"
  ORDER BY "week", "day";
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

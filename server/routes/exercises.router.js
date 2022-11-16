const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  // GET route code here
  const queryText = `
  SELECT 
  JSON_AGG("exercises") as exercises,
  "programs_exercises"."week",
  "programs_exercises"."day",
  "programs_exercises"."id"
  FROM
  "programs"
  LEFT JOIN "programs_exercises" ON "programs_exercises"."program_id" = "programs"."id"
  LEFT JOIN "exercises" ON "programs_exercises"."exercise_id" = "exercises"."id"
  WHERE "programs"."id" = 1
  GROUP BY "programs"."id", "programs_exercises"."week",
  "programs_exercises"."day", "programs_exercises"."id"
  ORDER BY "week", "day";`;

  pool.query(queryText)
  .then(dbResult => {
    res.send(dbResult.rows)
    // console.log('what is the result from exercises db', dbResult.rows)
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

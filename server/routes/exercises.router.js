const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');


router.get('/program/:programId/week/:weekId/day/:dayId', rejectUnauthenticated, (req, res) => {

  const sqlParams = [req.user.id, req.params.weekId, req.params.dayId, req.params.programId]
  const queryText = 
// `
// SELECT DISTINCT
// "exercises"."name", "exercises".rep_scheme, "exercises".notes, 
//  "programs_exercises"."week",
//  "programs_exercises"."day", "exercises".id
//  FROM
//  "programs"
//  LEFT JOIN "programs_exercises" ON "programs_exercises"."program_id" = "programs"."id"
//  LEFT JOIN "exercises" ON "programs_exercises"."exercise_id" = "exercises"."id"
//  LEFT JOIN "user_programs" ON "user_programs"."programs_id" = "programs"."id"
//  WHERE "programs_exercises"."week" = $1 
//  AND "programs_exercises"."day" = $2 
//  AND "programs_exercises".program_id = $3
//  GROUP BY "programs"."id", "programs_exercises"."week",
//  "programs_exercises"."day", "exercises".rep_scheme, "exercises".notes, "exercises"."name","exercises".id
//  ORDER BY "week", "day", "exercises".id;
// `;
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

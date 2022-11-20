const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/:programId', rejectUnauthenticated, (req, res) => {
    const programId = [req.params.programId]
    console.log('I AM IN THE ROUTER GET FUNCTION TO GET PROGRAM WEEKS')
    const sqlText = 
    `
    SELECT DISTINCT "programs_exercises".week 
    FROM "programs_exercises"
    LEFT JOIN "user_programs" ON "user_programs".programs_id = "programs_exercises".program_id
    WHERE "user_programs".programs_id = $1
    ORDER BY "programs_exercises".week;
    `;
    pool.query(sqlText, programId)
    .then((dbResult) => {
      console.log('what program info am i getting back from the user_programs table?', dbResult.rows)
      res.send(dbResult.rows)
    })
    .catch((error) => {
      console.log('error getting program weeks back from db', error)
      res.sendStatus(500)
    })
  })

  router.get('/:programId/week/:weekId', rejectUnauthenticated, (req, res) => {
    const programId = [req.params.programId, req.params.weekId]
    console.log('I AM IN THE ROUTER GET FUNCTION TO GET PROGRAM DAYS')
    const sqlText = 
    `
    SELECT DISTINCT "programs_exercises"."day" 
    FROM "programs_exercises"
    LEFT JOIN "user_programs" ON "user_programs".programs_id = "programs_exercises".program_id
    WHERE "user_programs".programs_id = $1 
    AND "programs_exercises"."week" = $2
    ORDER BY "programs_exercises"."day";
    `;
    pool.query(sqlText, programId)
    .then((dbResult) => {
      console.log('TRYING TO GET THE DAYS BACK FROM THE SERVER', dbResult.rows)
      res.send(dbResult.rows)
    })
    .catch((error) => {
      console.log('error getting program weeks back from db', error)
      res.sendStatus(500)
    })
  })


module.exports = router;
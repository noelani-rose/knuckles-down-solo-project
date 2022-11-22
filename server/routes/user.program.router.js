const express = require('express');
const { actionChannel } = require('redux-saga/effects');
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


  router.post('/dayComplete', (req, res) => {
    const sqlText = 
    `
    INSERT INTO "day_complete" ("user_id", "program", "week", "day", "complete")
    VALUES ($1, $2, $3, $4, $5)
    `;
    const sqlParams = [req.user.id, req.body.program, req.body.week, req.body.day, req.body.dayComplete]
    pool.query(sqlText, sqlParams)
      .then(dbResult => {
        res.sendStatus(200)
      })
      .catch(error => {
        console.log('error posting daycomplete to db', error)
      })
  })

  router.post('/weekComplete', (req, res) => {
    console.log('in the router post /weekComplete to mark week as complete', req.body)
    const sqlText = 
    `
    INSERT INTO "week_complete" ("user_id", "program", "week", "complete")
    VALUES ($1, $2, $3, $4)
    `;
    const sqlParams = [req.user.id, req.body.program, req.body.week, req.body.complete]
    pool.query(sqlText, sqlParams)
      .then(dbResult => {
        res.sendStatus(200)
        console.log('week complete successfully posted to db')
      }) 
      .catch(error => {
        console.log('error posting week complete to db', error)
        res.sendStatus(500)
      })
  })



module.exports = router;
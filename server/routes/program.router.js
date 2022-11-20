const express = require('express');
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  // GET route code here
  const queryText = `SELECT * FROM "programs" ORDER BY "id" ASC`;

  pool.query(queryText)
  .then(dbResult => {
    res.send(dbResult.rows)
  })
  .catch(error => {
    console.log('error getting all programs', error)
    res.sendStatus(500)
  })
});



router.post('/journal', rejectUnauthenticated, (req, res) => {
  const entry = req.body
  const userId = req.user.id
  const sqlParams = [entry.program, entry.week, entry.day, entry.entry, userId]
  console.log('wtf is sql params when posting to journal', sqlParams)

  const sqlText = 
  `
  INSERT INTO "journal" ("programs_id", "week", "day", "entry", "user_id")
  VALUES ($1, $2, $3, $4, $5);
  `;
  pool.query(sqlText, sqlParams)
    .then(dbResult => {
      res.sendStatus(200)
    })
    .catch(error => {
      console.log('error getting journal entries', error)
      res.sendStatus(500)
    })
})


router.get('/journal', rejectUnauthenticated, (req, res) => {
  const sqlTxt = 
  `
  SELECT "journal"."id", "journal"."entry", "journal"."user_id", "journal"."programs_id", "journal"."week", "journal"."day", "programs".name
  FROM "journal"
  JOIN "programs" ON "programs".id = "journal".programs_id;
  `;

  pool.query(sqlTxt)
    .then(dbResult => {
      console.log('am i getting the journal entries back from the server??', dbResult.rows)
      res.send(dbResult.rows)
    })
    .catch(error => {
      console.log('error fetching the journal entries from the server, in router', error)
    })

})


/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

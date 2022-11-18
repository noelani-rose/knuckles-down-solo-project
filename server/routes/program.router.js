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

router.get('/myProgram/', rejectUnauthenticated, (req, res) => {
  console.log('IN ROUTER TRYING TO GET PROGRAM ID!!!!!')
  const userId = [req.user.id]
  console.log('what is the user id?', userId)
  const sqlText = 
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

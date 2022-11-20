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







router.get('/')

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;

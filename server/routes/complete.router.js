const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
    console.log('am i hitting the right end point????')
    const sqlText = 
    `
    SELECT * FROM "day_complete"
    `;
    pool.query(sqlText)
    .then(dbResult => {
      res.send(dbResult.rows)
      console.log('AM I GETTING MY DAY COMPLETE BACK????', dbResult.rows)
    })
    .catch(error => {
      console.log('error getting day complete back from db', error)
    })
  })

  module.exports = router;

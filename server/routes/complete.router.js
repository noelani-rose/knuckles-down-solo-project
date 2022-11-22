const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');



router.get('/', rejectUnauthenticated, (req, res) => {
    const sqlParams = [req.user.id]
    const sqlText = 
    // where user id = req.user.id
    `
    SELECT * FROM "day_complete"
    WHERE "user_id" = $1
    `;
    pool.query(sqlText, sqlParams)
    .then(dbResult => {
      res.send(dbResult.rows)
    })
    .catch(error => {
      console.log('error getting day complete back from db', error)
    })
  })


// this can probably be deleted 
router.get('/week', rejectUnauthenticated, (req, res) => {
    console.log('in complete router trying to get the week table from db')
    const sqlText = 
    `
    SELECT * FROM "week_complete"
    `;
    pool.query(sqlText)
        .then(dbResult => {
            res.send(dbResult.rows)
            console.log('what am i getting back from db for week complete', dbResult.rows)
        })
        .catch(error => {
            console.log('error getting week complete back from db', error)
        })
})



  module.exports = router;

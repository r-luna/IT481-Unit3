const knex = require('../../../../db/knex');
const express = require('express');
const router = express.Router();
const authenticate = require('../../../../middleware/authenticate.js');

// GET Customer data
router.get('/', authenticate, async function(req, res, next) {
  try {
    if (req.role !== 'HRRole' && req.role !== 'CEORole') {
      res.status(401).send('Unauthorized');
    } else {
      await knex.select('*').from('Employees').then((orders) =>  { 
        res.json(orders);
      });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send(err.message);
  }
});


module.exports = router;

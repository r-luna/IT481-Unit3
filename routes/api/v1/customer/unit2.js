const knex = require('../../../../db/knex');
const express = require('express');
const router = express.Router();

// GET Customer data
router.get('/customers', async function(req, res, next) {
  try {

    await knex.select().from('Customers').select('ContactName').then((customers) =>  { 
      res.json(customers);
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// GET Customer total
router.get('/customerquan', async function(req, res, next) {
  try {

    await knex.select().from('Customers').count('* as totalRows').first().then((totalObj) =>  { 
      res.json(totalObj);
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

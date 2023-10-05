const knex = require('../db/knex');
const express = require('express');
const router = express.Router();

// GET Student data
router.get('/get/customers', async function(req, res, next) {
  try {

    await knex.select().from('Customers').select('ContactName').then((customers) =>  { 
      res.json(customers);
    });

  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;

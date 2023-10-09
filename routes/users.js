const express = require('express');
const router = express.Router();
const database = require("../db/db.js")
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;

var express = require('express');
var router = express.Router();

//API version 1
router.use('/v1', require('./v1'));

module.exports = router;

var express = require('express');
var router = express.Router();

router.use('/unit2', require('./unit2'));
// router.use('/route2', require('./route2'));

module.exports = router;
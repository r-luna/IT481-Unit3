var express = require('express');
var router = express.Router();

//API version 1

router.use('/v1/customer', require('./v1/customer/unit2'));
router.use('/v1/user/create', require('./v1/user/create.js'));
router.use('/v1/user/create', require('./v1/user/login.js'));

module.exports = router;

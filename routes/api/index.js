var express = require('express');
var router = express.Router();

router.use('/v1/customer', require('./v1/customer/unit2'));
router.use('/v1/orders/list', require('./v1/orders/list.js'));
router.use('/v1/customers/list', require('./v1/customers/list.js'));
router.use('/v1/user/create', require('./v1/user/create.js'));
router.use('/v1/user/login', require('./v1/user/login.js'));


module.exports = router;

const express = require('express');
const router = express.Router();
const usersRouter = require('./users.route');
const checkoutRouter = require('./checkout.route');
const webHooksRouter = require('./webhooks.route');


router.use('/checkout',checkoutRouter);
router.use('/users/', usersRouter);
router.use('/webhooks',webHooksRouter);


module.exports = router
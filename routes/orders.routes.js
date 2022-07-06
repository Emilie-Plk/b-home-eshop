const express = require('express');

const ordersController = require('../controllers/orders.controller');

const router = express.Router();

router.post('/orders', ordersController.addOrder); // /orders

router.get('/orders', ordersController.getOrders); // /orders

module.exports = router;
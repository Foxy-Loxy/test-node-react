const express = require('express');
const userControllers = require('../controllers/UserController');

const router = express.Router();

router.post('/subscribe', userControllers.subscription);

router.get('/unsubscribe', userControllers.unsubscription);

module.exports = router;

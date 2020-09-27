const express = require('express');
const userControllers = require('../controllers/UserController');

const router = express.Router();

router.post('/user', userControllers.subscription);



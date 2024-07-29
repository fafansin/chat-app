const express = require('express');
const { signup, login, logout } = require('../controllers/auth.controller.js');
const router = express.Router();

router.get('/signup', signup)
router.get('/login', login)
router.get('/logout', logout)


module.exports = router;
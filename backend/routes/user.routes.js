const express = require('express');
const router = express.Router();
const { getUsersForSideBar } = require('../controllers/user.controller.js');
const protectRoute = require('../middleware/protectRoute.js');

router.get('/', protectRoute, getUsersForSideBar);

module.exports = router;
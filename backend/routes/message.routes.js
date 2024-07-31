const express = require('express');
const router = express.Router();
const { sendMessage, getMessage } = require('../controllers/message.controller.js')
const protectRoute = require('../middleware/protectRoute.js');

router.get('/:id', protectRoute, getMessage);
router.post('/send/:id', protectRoute, sendMessage);

module.exports = router;
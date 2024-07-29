const express = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send('Signup Route')
})
router.get('/login', (req, res) => {
  res.send('Login Route')
})


module.exports = router;
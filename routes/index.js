const express = require('express');
const router = express.Router();
const { home, createEmail, verifyEmail } = require('../controllers/email');

/* GET home page. */

router.get('/', home);
router.post('/create-email', createEmail);
router.get('/verify', verifyEmail);
module.exports = router;

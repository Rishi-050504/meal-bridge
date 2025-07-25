const express = require('express');
const router = express.Router();
const { sendQuery } = require('../controllers/helpController');

router.post('/send-query', sendQuery);

module.exports = router;
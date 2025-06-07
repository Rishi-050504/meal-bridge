const express = require('express');
const router = express.Router();
const { createDonation, getValidDonations } = require('../controllers/donationController');
const { protect } = require('../middleware/authMiddleware');

router.post('/', protect, createDonation);
router.get('/', getValidDonations); // ?area=Hyderabad etc.

module.exports = router;

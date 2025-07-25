const express = require('express');
const router = express.Router();
const { 
    createDonation, 
    getDonations, 
    acceptDonation
} = require('../controllers/donationController');
const upload = require('../utils/cloudinary');

// POST a new donation with an image
router.post('/', upload.single('foodImage'), createDonation);

// GET all donations
router.get('/', getDonations);

// POST to accept a donation
router.post('/:id/accept', acceptDonation);

module.exports = router;

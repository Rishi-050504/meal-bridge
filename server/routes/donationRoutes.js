const express = require('express');
const router = express.Router();
const donationController = require('../controllers/donationController');
const multer = require('multer');
const path = require('path');

// Configure multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // folder in root directory
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// Routes
router.post('/', upload.array('images', 5), donationController.createDonation);
router.get('/', donationController.getDonations);

module.exports = router;

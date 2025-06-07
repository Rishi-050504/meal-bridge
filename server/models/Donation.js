const mongoose = require('mongoose');

const donationSchema = new mongoose.Schema({
  donor: {
    type: mongoose.Schema.Types.String,
    ref: 'User',
    required: true,
  },
  items: [String],
  address: String,
  contact: String,
  locality: {
    type: String,
    required: true,
  },
  expirationTime: Date,
  image: String,
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);

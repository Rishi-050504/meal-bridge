const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  name: String,
  quantity: String,
});

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  donorEmail: { type: String, required: true },
  donorPhone: { type: String, required: true },
  donorAddress: { type: String, required: true },
  locality: { type: String, required: true },
  items: [itemSchema],
  dateTime: { type: Date, required: true },
  imageUrls: [String],
}, { timestamps: true });

module.exports = mongoose.model('Donation', donationSchema);

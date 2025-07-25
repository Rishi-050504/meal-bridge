const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    itemName: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 }
});

const donationSchema = new mongoose.Schema({
    locality: { type: String, required: true },
    items: [itemSchema],
    donorName: { type: String, required: true },
    donorMobile: { type: String, required: true },
    donorEmail: { type: String, required: true },
    donorAddress: { type: String, required: true },
    foodImage: { type: String, required: true }, // URL for the food image
    createdAt: { type: Date, default: Date.now, expires: '24h' } // Automatically remove after 24 hours
});

module.exports = mongoose.model('Donation', donationSchema);
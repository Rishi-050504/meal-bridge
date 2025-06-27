const Donation = require('../models/Donation');

// POST /api/donations
exports.createDonation = async (req, res) => {
  try {
    const {
      donorName,
      donorEmail,
      donorPhone,
      donorAddress,
      locality,
      items,
      dateTime,
    } = req.body;

    const imageUrls = req.files.map(file => `/uploads/${file.filename}`);

    const newDonation = new Donation({
      donorName,
      donorEmail,
      donorPhone,
      donorAddress,
      locality,
      items: JSON.parse(items),
      dateTime,
      imageUrls,
    });

    await newDonation.save();
    res.status(201).json({ message: 'Donation submitted successfully' });
  } catch (err) {
    console.error('Error creating donation:', err);
    res.status(500).json({ message: 'Failed to create donation' });
  }
};

// GET /api/donations
exports.getDonations = async (req, res) => {
  try {
    const now = new Date();
    const donations = await Donation.find({
      dateTime: { $gt: now }
    }).sort({ createdAt: -1 });

    res.json(donations);
  } catch (err) {
    console.error('Error fetching donations:', err);
    res.status(500).json({ message: 'Failed to fetch donations' });
  }
};

const Donation = require('../models/Donation');
const User = require('../models/User');

exports.createDonation = async (req, res) => {
  try {
    const user = await User.findOne({ mobile: req.user.mobile });

    const { items, address, contact, locality, expirationTime, image } = req.body;

    const newDonation = new Donation({
      donor: user.mobile,
      items,
      address,
      contact,
      locality,
      expirationTime,
      image,
    });

    await newDonation.save();
    res.status(201).json(newDonation);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getValidDonations = async (req, res) => {
  const { area } = req.query;

  try {
    const donations = await Donation.find({
      expirationTime: { $gt: new Date() },
      locality: area,
    });

    res.json(donations);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

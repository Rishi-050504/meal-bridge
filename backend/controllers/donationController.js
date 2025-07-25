const Donation = require('../models/Donation');
const cloudinary = require('cloudinary').v2;
const nodemailer = require('nodemailer');

// Create a new donation
const createDonation = async (req, res) => {
    try {
        const { locality, items, donorName, donorMobile, donorEmail, donorAddress } = req.body;

        if (!req.file) {
            return res.status(400).json({ message: 'Please upload an image of the food.' });
        }

        // Basic validation
        if (!locality || !items || !donorName || !donorMobile || !donorEmail || !donorAddress) {
            return res.status(400).json({ message: 'Please fill all required fields.' });
        }
        
        const newDonation = new Donation({
            locality,
            items: JSON.parse(items), // Parse the items array from JSON string
            donorName,
            donorMobile,
            donorEmail,
            donorAddress,
            foodImage: req.file.path // Get the image URL from Cloudinary
        });

        const savedDonation = await newDonation.save();
        res.status(201).json(savedDonation);
    } catch (error) {
        // Enhanced error logging
        console.error("ERROR CREATING DONATION:", error);
        res.status(500).json({ message: 'Server Error: ' + error.message });
    }
};

// Get all donations
const getDonations = async (req, res) => {
    try {
        const { locality } = req.query;
        const filter = {};
        if (locality) {
            filter.locality = new RegExp(locality, 'i'); // Case-insensitive search
        }
        const donations = await Donation.find(filter).sort({ createdAt: -1 });
        res.status(200).json(donations);
    } catch (error) {
        console.error("ERROR GETTING DONATIONS:", error);
        res.status(500).json({ message: 'Server Error: ' + error.message });
    }
};

// Accept a donation and send details to receiver
const acceptDonation = async (req, res) => {
    try {
        const { receiverEmail } = req.body;
        if (!receiverEmail) {
            return res.status(400).json({ message: 'Receiver email is required.' });
        }

        // Find the donation document
        const donation = await Donation.findById(req.params.id);
        if (!donation) {
            return res.status(404).json({ message: 'Donation not found' });
        }

        // Send an email to the receiver with the donor's details
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        const itemsList = donation.items.map(item => `- ${item.itemName} (Quantity: ${item.quantity})`).join('\n');

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: receiverEmail,
            subject: 'Donation Accepted! Donor Contact Details',
            text: `Thank you for accepting the donation! Please contact the donor to arrange pickup.\n\nDonor Details:\nName: ${donation.donorName}\nMobile: ${donation.donorMobile}\nEmail: ${donation.donorEmail}\nAddress: ${donation.donorAddress}\n\nDonated Items:\n${itemsList}\n\nThis donation has now been removed from the public list.`
        };

        await transporter.sendMail(mailOptions);

        // --- Cleanup after successful email ---

        // Extract the public ID from the image URL to delete from Cloudinary
        const imageUrl = donation.foodImage;
        const urlSegments = imageUrl.split('/');
        const publicIdWithFolder = urlSegments.slice(urlSegments.indexOf('food-donations')).join('/');
        const publicId = publicIdWithFolder.substring(0, publicIdWithFolder.lastIndexOf('.'));

        if (publicId) {
            await cloudinary.uploader.destroy(publicId);
        }

        // Delete the donation from MongoDB
        await donation.remove();

        res.status(200).json({ message: 'Donation details sent to your email. Please check your inbox.' });
    } catch (error) {
        console.error("ERROR ACCEPTING DONATION:", error);
        res.status(500).json({ message: 'Server Error: ' + error.message });
    }
};

module.exports = {
    createDonation,
    getDonations,
    acceptDonation
};
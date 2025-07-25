const nodemailer = require('nodemailer');

const sendQuery = async (req, res) => {
    const { name, email, query } = req.body;

    if (!name || !email || !query) {
        return res.status(400).json({ message: 'Please fill all fields.' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail', // or another email service
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
        // This option tells Node.js to not reject connections with self-signed certificates.
        // It's a common fix for development environments behind certain firewalls or proxies.
        tls: {
            rejectUnauthorized: false
        }
    });

    const mailOptions = {
        from: email,
        to: process.env.RECIPIENT_EMAIL, // The email you'll specify
        subject: `New Query from FoodShare App by ${name}`,
        text: `You have a new query from:\n\nName: ${name}\nEmail: ${email}\n\nQuery:\n${query}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ message: 'Query sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send query. Please try again later.' });
    }
};

module.exports = { sendQuery };
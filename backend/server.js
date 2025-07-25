const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const donationRoutes = require('./routes/donationRoutes');
const helpRoutes = require('./routes/helpRoutes');

// App Config
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // For form data
app.use(cors());

// Serve uploads folder statically
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Suppress Mongoose Deprecation Warning
mongoose.set('strictQuery', true);

// DB Config
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB connected successfully"))
.catch(err => console.log("MongoDB connection error: ", err));


// API Endpoints
app.use('/api/donations', donationRoutes);
app.use('/api/help', helpRoutes);

// Listener
app.listen(port, () => console.log(`Server listening on localhost: ${port}`));
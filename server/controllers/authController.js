//  const User = require('../models/User');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');

// // Register user
// exports.register = async (req, res) => {
//   const { name, email, password, mobile } = req.body;

//   if (!name || !email || !password || !mobile) {
//     return res.status(400).json({ message: 'All fields are required' });
//   }

//   try {
//     const existing = await User.findOne({ $or: [{ email }, { mobile }] });
//     if (existing) {
//       return res.status(400).json({ message: 'User already exists' });
//     }

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newUser = new User({
//       name,
//       email,
//       mobile,
//       password: hashedPassword,
//     });

//     await newUser.save();

//     const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.status(201).json({
//       message: 'User registered successfully',
//       token,
//       userId: newUser._id, // ✅ added
//     });
//   } catch (err) {
//     console.error('Registration error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Login user
// exports.login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(401).json({ message: 'Invalid credentials' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
//       expiresIn: '1h',
//     });

//     res.json({
//       token,
//       userId: user._id, // ✅ added
//     });
//   } catch (err) {
//     console.error('Login error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Get user details (protected route)
// exports.getUser = async (req, res) => {
//   try {
//     const user = await User.findById(req.user._id).select('-password');
//     res.json(user);
//   } catch (err) {
//     console.error('Get user error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

// // Optional: Update user details (used in EditProfile.js)
// exports.editUser = async (req, res) => {
//   const { name, email, mobile } = req.body;

//   try {
//     const updatedUser = await User.findByIdAndUpdate(
//       req.user._id,
//       { name, email, mobile },
//       { new: true, runValidators: true }
//     ).select('-password');

//     res.json(updatedUser);
//   } catch (err) {
//     console.error('Update user error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// };

const User = require('../models/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

// Register user
exports.register = async (req, res) => {
  const { name, email, password, mobile } = req.body;

  if (!name || !email || !password || !mobile) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const existing = await User.findOne({ $or: [{ email }, { mobile }] });
    if (existing) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name,
      email,
      mobile,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ userId: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.status(201).json({
      message: 'User registered successfully',
      token,
      userId: newUser._id, // ✅ Send userId
    });
  } catch (err) {
    console.error('Registration error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login user
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    res.json({
      token,
      userId: user._id, // ✅ Send userId
    });
  } catch (err) {
    console.error('Login error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get user details (protected)
exports.getUser = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (err) {
    console.error('Get user error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update user (for EditProfile)
exports.editUser = async (req, res) => {
  const { name, email, mobile } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.user._id,
      { name, email, mobile },
      { new: true, runValidators: true }
    ).select('-password');

    res.json(updatedUser);
  } catch (err) {
    console.error('Update user error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

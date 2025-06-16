//  module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { register, login, getUser } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/register', register);
// router.post('/login', login);
// router.get('/me', protect, getUser);

// module.exports = router;

// const express = require('express');
// const router = express.Router();
// const { register, login, getUser } = require('../controllers/authController');
// const { protect } = require('../middleware/authMiddleware');

// router.post('/register', register);
// router.post('/login', login);
// router.get('/me', protect, getUser);

// module.exports = router; // ✅ This should come AFTER 'router' is defined



const express = require('express');
const router = express.Router();
const { register, login, getUser } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/me', protect, getUser);

module.exports = router;

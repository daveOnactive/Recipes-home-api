const router = require('express').Router();
const authRoute = require('../controllers/authRoute');

// SIGNIN
router.post('/register', authRoute.userSignIn );

//LOGIN
router.post('/login', authRoute.userLogin );

module.exports = router;
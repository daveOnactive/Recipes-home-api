const router = require('express').Router();
const authRoute = require('../controllers/authRoute');

// SIGNIN
router.post('/register', authRoute.userSignIn );

//LOGIN
router.post('/login', authRoute.userLogin );

// GET SINGLE USER
router.get('/:id', authRoute.getOneUser);

module.exports = router;
const router = require('express').Router();
const User = require('../model/User');
const { registerValidation } = require('../validation');

router.post('/register', async (req, res) => {
  // Validate User Details
  // const { error } = registerValidation(req.body);

  // Check if email already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if(emailExist) {
    return res.status(400).send('Email already exist in the DB');
  }

  // Create User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  });
  try {
    const saveUser = await user.save();
    res.send(saveUser)
  } catch(err) {
    res.status(400).send(err);
  }

});

module.exports = router;
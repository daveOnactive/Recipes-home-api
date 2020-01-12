const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../controllers/validation');

exports.userSignIn = async (req, res, next) => {
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  // Check if email already exist
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) {
    return res.status(400).json({error: 'Email already exist in the DB'});
  }

  // Hashing the password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  // Create User
  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword
  });
  try {
    const saveUser = await user.save();
    return res.json({ user: user._id })
  } catch (err) {
    return res.status(400).json({error: err});
  }
}

exports.userLogin = async (req, res, next) => {
  // Validate User Details
  const { error } = loginValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  //Checking if the email exist
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(400).json({error: 'Email or password is wrong'});
  }

  //Password is correct
  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    return res.status(400).json({error: 'Invalid password'});
  }

  // Create and assign a token
  const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.header('auth-token', token).json({token: token});
  next();

}
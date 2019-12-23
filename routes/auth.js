const router = require('express').Router();
const User = require('../model/User');

//VALIDATION
const Joi = require('@hapi/joi');

const schema = {
  name: Joi.string().min(6).required(),
  email: Joi.string().min(6).required().email(),
  password: Joi.string().min(6).required()
};

router.post('/register', async (req, res) => {
  const validation = Joi.validate(req.body, schema);
  res.send(validation);
  // const user = new User({
  //   name: req.body.name,
  //   email: req.body.email,
  //   password: req.body.password
  // });
  // try {
  //   const saveUser = await user.save();
  //   res.send(saveUser)
  // } catch(err) {
  //   res.status(400).send(err);
  // }

});

module.exports = router;
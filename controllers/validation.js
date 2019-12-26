const Joi = require('joi');

const registerValidation = data => {
  const schema = {
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }

  return Joi.validate(data, schema);
};

const loginValidation = data => {
  const schema = {
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required()
  }

  return Joi.validate(data, schema);
}

const receipeValidation = data => {
  const schema = {
    title: Joi.string().min(3).required(),
    description: Joi.string().min(6).required(),
    ingredient: Joi.string().required(),
    beforeYouCook: Joi.string().required(),
    cookingDirections: Joi.strict().required(),
    tools: Joi.string(),
    imageUrl: Joi.string().min(2).required()
  }

  return Joi.validate(data, schema);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.receipeValidation = receipeValidation;
const Joi = require('joi');

const usernameSchema = Joi.string().min(3).required().messages();
const emailSchema = Joi.string().email().required();
const passwordSchema = Joi.string().min(8).max(30).required();

const signUpSchema = Joi.object({
  username: usernameSchema,
  email: emailSchema,
  password: passwordSchema,
});

const signInSchema = Joi.object({
  email: emailSchema,
  password: passwordSchema,
});

module.exports = {
  signUpSchema,
  signInSchema,
  emailSchema,
};

const Joi = require("joi");

const createUserSchema = Joi.object({
  firstname: Joi.string().alphanum().min(3).max(30).required(),
  lastname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  image: Joi.string().allow("").min(3)
});

module.exports = { createUserSchema };

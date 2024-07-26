const Joi = require("joi");

const createCarSchema = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  model: Joi.string().alphanum().min(3).max(30).required(),
  id_user: Joi.required(),
});

module.exports = { createCarSchema };

const Joi = require('joi');

const eventSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  category: Joi.string().required(),
  date: Joi.date().required(),
  time: Joi.string().required(),
  location: Joi.string().required(),
});

module.exports = { eventSchema };

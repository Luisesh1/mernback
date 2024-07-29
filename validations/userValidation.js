const Joi = require("joi");
const userSchema = Joi.object({
	username: Joi.string().required(),
	email: Joi.string().email().required(),
	password: Joi.string().min(6).required(),
	role: Joi.string().valid("ticket_office", "organizer", "participant").optional(),
});
module.exports = { userSchema };

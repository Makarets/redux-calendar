// Validation
var Joi = require('@hapi/joi');

// Register validation
const registerValidation = data => {
	const schema = Joi.object({
		name: Joi.string().min(2).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	});
	return schema.validate(data);
}

const loginValidation = data => {
	const schema = Joi.object({
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	});
	return schema.validate(data);
}

const eventValidation = data => {
	const schema = Joi.object({
		top: Joi.number().required(),
		label: Joi.string().required(),
		height: Joi.number().required(),
		user_id: Joi.string().required(),
		eventStart: Joi.number().required(),
		eventDuration: Joi.number().required()
	});
	return schema.validate(data);
}

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
module.exports.eventValidation = eventValidation;

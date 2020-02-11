const router = require('express').Router();
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { registerValidation, loginValidation } = require('../validation');

router.post('/register', async (req, res) => {
	const {error} = registerValidation(req.body);
	if(error) return res.status(400).send({
							error_field: error.details[0].context.label,
							message: error.details[0].message
						});


	// Checking if the user is already in the database
	const emailExist = await User.findOne({email: req.body.email});
	if(emailExist) return res.status(400).send({
			error_field: "email",
			message: 'Email already exists'
		});

	// Hash passwords
	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(req.body.password, salt);

	

	const user = new User({
		name: req.body.name,
		email: req.body.email,
		password: hashedPassword
	});
	try{
		const savedUser = await user.save();
		res.send({user: user.id});
	}catch(err) {
		res.status(400).send(err)
	}
});


// LOGIN 
router.post('/login', async (req, res) => {
	const {error} = loginValidation(req.body);
	if(error) return res.status(400).send({
					error_field: error.details[0].context.label,
					message: error.details[0].message
				});
	// Checking if email exists
	const user = await User.findOne({email: req.body.email});
	if(!user) return res.status(400).send({
		error_field: 'email',
		message: 'Email is not found!'
	});
	// Checking password is correct
	const vlidPass = await bcrypt.compare(req.body.password, user.password);
	if(!vlidPass) return res.status(400).send({
		error_field: "password",
		message: "Invalid password"
	});
	// Create and assign a token
	const token = jwt.sign({_id: user._id}, process.env.TOKEN_SECRET);
	res.header('auth-token', token).send({access_token: token});
});

module.exports = router;
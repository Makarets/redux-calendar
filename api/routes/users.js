var express = require('express');
var router = express.Router();
const User = require('../model/User');

/* GET users listing. */
router.get('/:id', async function(req, res, next) {
	const user = await User.findOne({_id: req.params.id});
	if(!user) return res.status(400).send({
		error_field: 'email',
		message: 'Email is not found!'
	});
	return res.status(200).send({a: 'awdawddaw'});
	// Chec
});

module.exports = router;

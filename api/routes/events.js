const router = require('express').Router();
const Event = require('../model/Event');
const { eventValidation } = require('../validation');

router.post('/', async (req, res) => {
	const {error} = eventValidation(req.body);
	if(error) return res.status(400).send({
							error_field: error.details[0].context.label,
							message: error.details[0].message
						});

	const event = new Event({
		user_id: req.body.user_id,
		eventStart: req.body.eventStart,
		eventDuration: req.body.eventDuration
	});
	try{
		const savedEvent = await event.save();
		res.send({event: event.id});
	}catch(err) {
		res.status(400).send(err)
	}
})
	

module.exports = router;
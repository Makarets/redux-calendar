const router = require('express').Router();
const Event = require('../model/Event');
const { eventValidation } = require('../validation');
const fs = require('fs');

router.post('/add', async (req, res) => {
	const {error} = eventValidation(req.body);
	if(error) return res.status(400).send({
							error_field: error.details[0].context.label,
							message: error.details[0].message
						});

	const event = new Event({
		top: req.body.top,
		label: req.body.label,
		height: req.body.height,
		user_id: req.body.user_id,
		eventStart: req.body.eventStart,
		eventDuration: req.body.eventDuration
	});
	try{
		const savedEvent = await event.save();
		const events = await Event.find({user_id: req.body.user_id});
		res.send({user_events: events});
	}catch(err) {
		res.status(400).send(err)
	}
});

// GET user events
router.get('/:user_id', async (req, res) => {
	const events = await Event.find({user_id: req.params.user_id});
	if(!events) return res.status(400).send("Events not found");
	return res.status(200).send({user_events: events});
})

// Export JSON
router.get('/export/:user_id', async (req, res) => {
	const events = await Event.find({user_id: req.params.user_id});
	if(!events) return res.status(400).send("Events not found");

	const eventsJSON = events.map(function(elem, index, arr) {
		let export_data = {
			start: events[index].eventStart,
			durstion: events[index].eventDuration,
			title: events[index].label
		};
		return export_data;
	});

	let data = JSON.stringify(eventsJSON, null, 2);
	fs.writeFileSync('events.json', data);
    const file = 'D:/redux-calendar/api/events.json';
  	res.download(file); // Set disposition and send it.

 

	return res.status(200).send('export has been completed!');
})


module.exports = router;
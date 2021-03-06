const router = require('express').Router();
const Event = require('../model/Event');
const { eventValidation } = require('../validation');
const fs = require('fs');
var http = require('http');
const path = require('path');

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
		const eventsSort = events.sort(function (a, b) {
			if (a.top > b.top) return 1;
			if (a.top < b.top) return -1;
			return 0;// a == b
		});
		res.send({user_events: eventsSort});
	}catch(err) {
		res.status(400).send(err)
	}
});

// DELETE event

router.delete('/:user_id/remove/:event_id', async (req, res) => {
	const event = await Event.findById(req.params.event_id, function(err, event) {
		if(err) { return handleError(res, err); }
	    if(!event) { return res.send(404); }
	    event.remove(function(err) {
			if(err) { return handleError(res, err); }
			
	    });
	})
});

// GET user events
router.get('/:user_id', async (req, res) => {
	const events = await Event.find({user_id: req.params.user_id});

	if(!events) return res.status(400).send("Events not found");

	const eventsSort = events.sort(function (a, b) {
		if (a.top > b.top) return 1;
		if (a.top < b.top) return -1;
		return 0;// a == b
	});

	return res.status(200).send({user_events: eventsSort});
})

// Export JSON
router.get('/export/:user_id', async (req, res) => {
	const events = await Event.find({user_id: req.params.user_id});
	if(!events) return res.status(400).send("Events not found");

	const eventsSort = events.sort(function (a, b) {
		if (a.top > b.top) return 1;
		if (a.top < b.top) return -1;
		return 0;// a == b
	});
	const eventsJSON = eventsSort.map(function(elem, index, arr) {
		let export_data = {
			start: eventsSort[index].eventStart,
			duration: eventsSort[index].eventDuration,
			title: eventsSort[index].label
		};
		return export_data;
	});

	let data = JSON.stringify(eventsJSON, null, 2);
	fs.writeFileSync('events.json', data);
	res.download('./events.json', 'events.json');
})


module.exports = router;
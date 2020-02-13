const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	top: {
		type: Number,
		require: true
	},
	label: {
		type: String,
		require: true
	},
	height: {
		type: Number,
		require: true
	},
	user_id: {
		type: String,
		require: true
	},
	eventStart: {
		type: Number,
		require: true
	},
	eventDuration: {
		type: Number,
		require: true
	}
});

module.exports = mongoose.model('Event', userSchema);
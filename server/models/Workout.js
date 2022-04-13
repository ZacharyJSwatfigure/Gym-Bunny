const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	focusId: {
		type: String,
		required: true,
		trim: true
	},
	
});

module.exports = model('Workout', workoutSchema);
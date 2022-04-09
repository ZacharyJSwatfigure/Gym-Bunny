const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	focus:{
		type: String,
		required: true,
		trim: true
	},
	workouts: [{
		type: String,
		required: true,
		trim: true
	}]
});

module.exports = model('Workout', workoutSchema);
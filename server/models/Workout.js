const { Schema, model } = require('mongoose');

const workoutSchema = new Schema({
	exercise: String,
	completed: {
		type: Boolean,
		default: false,
	},
	userId: {
		type: Schema.Types.ObjectId,
		ref: 'User',
	},
});

module.exports = model('Workout', workoutSchema);
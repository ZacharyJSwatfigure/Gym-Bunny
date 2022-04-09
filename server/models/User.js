const { Schema, model } = require('mongoose');
const { isEmail } = require('validator');


const userSchema = new Schema({
	username:{
		type: String,
		required: true,
		trim: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		trim: true,
		lowercase: true,
		unique: true,
		validate: {
			validator: function (value) {
				return isEmail(value);
			},
		},
	},
	password:{
		type: String,
		required: true,
		trim: true
	},
});

module.exports = model('User', userSchema);
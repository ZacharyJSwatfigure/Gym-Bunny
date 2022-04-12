const { AuthenticationError } = require("apollo-server-express");
const { Workout, User } = require("../models");
const utils = require("../utils");
const resolvers = {
	Query: {
		user: async (_root, { id }) => {
			return await User.findById(id);
		},
		users: async (_root, args) => {
			// if (context.user) {
			return await User.find({});
			// }
			// throw new AuthenticationError('You must be logged in to do that');
		},
		workout: async (_root, { id }) => {
			return await Workout.findById(id);
		},
		workouts: async () => {
			const workouts = await Workout.find({});
			return workouts;
		},
	},
	Mutation: {
		// Sign up
		createUser: async (_root, { username, email, password }) => {
			const user = await User.create({
				username,
				email,
				password,
			});
			const token = utils.signToken(user.username, user._id);
			return { token, user };
		},
		login: async (_root, { username, password }) => {
			const userFound = await User.findOne({ username });
			if (!userFound) {
				throw new AuthenticationError("No user found with this email");
			}
			if (userFound.password === password) {
				const token = utils.signToken(userFound.username, userFound._id);
				return { token, userFound };
			}
			throw new AuthenticationError("You must provide correct credentials");
		},
		createWorkout: async (parent, { _id }, context) => {
			if (context.user) {
				try {
					const user = await User.findOneAndUpdate(
						{ _id: context.user._id },
						{ $push: { createdWorkoutIds: _id } }
					);
					return user;
				} catch (error) {
					console.log(error);
					return error;
				}
			}
		},
	},
	User: {
		username: (root) => {
			return `${root.username}`;
		},
		nameLength: (root) => {
			return root.username.length;
		},
		createWorkouts: async (root) => {
			return await Workout.find({ _id: { $in: root.createdWorkoutIds } });
		},
	},
};
module.exports = resolvers;

const {AuthorizationError} = require('apollo-server-express');
const {Workout, User} = require('../models');
const utils = require('../utils');

const resolvers = {
	Query: {
		user: async (_root, {id}) => {
			return await User.findById(id);
		},
		users: async (_root, _args, context) => {
			if (!context.req.user) {
				throw new AuthorizationError('You must be logged in to do that');
			}
			return await User.find({});
		},
		workout: async (_root, {id}) => {
			return await Workout.findById(id);
		},
		workouts: async () => {
			return await Workout.find({});
		}
	},
	Mutation: {
		// Sign up
		createUser: async (_root, {username, email, password}) => {
			const user = await User.create({
				username,
				email,
				password,
			});

			const token = utils.signToken(user.username, user._id);
			return {token, user};
		},
		login: async (_root, {email, password}) => {
			const userFound = await User.findOne({email});

			if (!userFound) {
				throw new AuthorizationError('No user found with this email');
			}
			if (userFound.password === password) {
				const token = utils.signToken(userFound.username, userFound._id);
				return {token, userFound};
			}
			throw new AuthorizationError('You must provide correct credentials');
		},
		createWorkout: async (_root, {exercise, userId, completed}) => {
			return await Workout.create({
				exercise,
				userId,
				completed
			});
		}
	},

	User: {
		username: (root) => {
			return `${root.username}`;
		},
		nameLength: (root) => {
			return root.username.length;
		},
		workouts: async  (root) => {
			return await Workout.find({
				userId: root._id,
			});
		}
	},
	Workout: {
		user: async (root) => {
			return await User.findById(root.userId);
		}
	}
};

module.exports = resolvers;
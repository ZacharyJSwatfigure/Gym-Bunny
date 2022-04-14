const { AuthenticationError } = require("apollo-server-express");

const { Exercise, Workout, User } = require("../models");
const utils = require("../utils");

const resolvers = {
  Query: {
    user: async (_root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("No user by this Id");
      }
      return await User.findById(context.user._id);
    },
    workouts: async (_root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("No user by this Id");
      }
      const workouts = await Workout.find({ userId: context.user._id });
      return workouts;
    },
    exercises: async (_root, args, context) => {
      const { focusId } = args;
      const query = {};
      if (focusId) {
        query["focusId"] = focusId;
      }
      const exercise = await Exercise.find(query);
      return exercise;
    },
  },
  Mutation: {
    createUser: async (_root, args) => {
      const user = await User.create(args);
      const token = utils.signToken(user.username, user._id);
      return { token, user };
    },
    updateUser: async (_root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("You must be logged in to update");
      }
      const updatedUser = await User.findByIdAndUpdate(context.user._id, args, {
        new: true,
      });
      return updatedUser._id;
    },
    login: async (_root, { username, password }) => {
      const user = await User.findOne({ username });
      if (user && (await user.isCorrectPassword(password))) {
        const token = utils.signToken(user.username, user._id);
        return { token, user };
      } else {
        throw new AuthenticationError("You must provide correct credentials");
      }
    },
    logout: async (_root, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("No user by this Id");
      }
      const token = context.user.token;
      const expiredToken = await Token.create({ token });
      return expiredToken._id;
    },
    createExercise: async (parent, args, context) => {
      try {
        const { focusId, name } = args;
        const exercise = await Exercise.create({
          focusId,
          name,
        });
        return exercise;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    deleteExercise: async (parent, { id }, context) => {
      try {
        const deletedExercise = await Exercise.findByIdAndDelete(id);
        return deletedExercise._id;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    createWorkout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError("No user by this Id");
      }
      const { exercises } = args;
      const createdWorkout = await Workout.create({
        userId: context.user._id,
        exercises,
      });
      return createdWorkout._id;
    },
  },
};

module.exports = resolvers;

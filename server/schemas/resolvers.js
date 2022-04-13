const { AuthenticationError } = require("apollo-server-express");
const { Workout, User } = require("../models");
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
      const { focusId } = args;
      const query = {
        userId: context.user._id,
      };
      if (focusId) {
        query["focusId"] = focusId;
      }
      const workouts = await Workout.find(query);
      return workouts;
    },
  },
  Mutation: {
    // Sign up
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

    createWorkout: async (parent, args, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You must be logged in to perform this action"
        );
      }
      try {
        const { focusId, name } = args;
        const workout = await Workout.create({
          userId: context.user._id,
          focusId,
          name,
        });
        return workout;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
    deleteWorkout: async (parent, { id }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You must be logged in to perform this action"
        );
      }
      try {
        const deletedWorkout = await Workout.findByIdAndDelete(id);
        return deletedWorkout._id;
      } catch (error) {
        console.log(error);
        return error;
      }
    },
  },
};
module.exports = resolvers;

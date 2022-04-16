/* typeDefs is short for typeDefinitions */
const { gql } = require("apollo-server-express");

// Queries and Mutations
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    nameLength: Int
    email: String
  }
  type Auth {
    token: String
    user: User
  }
  type Workout {
    _id: ID
    userId: ID
    exercises: [Exercise]
  }
  type Exercise {
    _id: ID
    name: String
    focusId: String
  }
  input ExerciseInput {
    name: String!
    focusId: String!
  }
  type Query {
    user: User
    workouts: [Workout]
    exercises(focusId: String): [Exercise]
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): ID
    login(username: String!, password: String!): Auth
    logout: ID
    createExercise(focusId: String!, name: String!): Exercise
    deleteExercise(id: ID!): ID
    createWorkout(exercises: [ExerciseInput]!): ID
  }
`;

module.exports = typeDefs;

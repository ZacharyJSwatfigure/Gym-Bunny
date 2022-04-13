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
    name: String
    focusId: String
    userId: String
    # watch ^
  }
  type Query {
    user(id: String!): User
    workouts(focusId: String): [Workout]
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    updateUser(username: String, email: String, password: String): ID
    login(username: String!, password: String!): Auth
    logout: ID
    createWorkout(focusId: String!, name: String!): Workout
    deleteWorkout(id: String!): ID
  }
`;
module.exports = typeDefs;

// createWorkouts: [Workout] add back to user if I mess up

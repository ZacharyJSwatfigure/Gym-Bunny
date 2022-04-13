/* typeDefs is short for typeDefinitions */
const { gql } = require("apollo-server-express");
// Queries and Mutations
const typeDefs = gql`
  type User {
    _id: ID!
    username: String
    nameLength: Int
    email: String
    createdWorkoutIds: [Workout]
    
  }
  type Auth {
    token: String
    user: User
  }
  type Workout {
    _id: ID
    name: String
    focusId: String
  }
  type Query {
    user(id: String!): User
    users: [User!]!
    workout(id: String!): Workout
    workouts: [Workout!]!
  }
  type Mutation {
    createUser(username: String!, email: String!, password: String!): Auth
    login(username: String!, password: String!): Auth
    createWorkout(workoutId: String!): Workout
    deleteWorkout(createdWorkoutIds: [String]!): Workout
  }
  
`;
module.exports = typeDefs;



// createWorkouts: [Workout] add back to user if I mess up
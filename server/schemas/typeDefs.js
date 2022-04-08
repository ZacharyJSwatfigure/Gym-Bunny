/* typeDefs is short for typeDefinitions */
const { gql } = require('apollo-server-express');

// Queries and Mutations
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        nameLength: Int
        email: String
        workouts: [Workout]
    }
    type Auth {
        token: String
        user: User
    }
    type Workout {
        _id: ID
        exercise: String
        completed: Boolean
        userId: String
        user: User
        + focus: Focus
    }
    
+ enum Focus {
+   ABS
+   ARMS
+   CHEST
+   CALVES
+   BACK
+   LEGS
+   SHOULDERS
+ }

    type Query {
        user(id: String!): User
        users: [User]
        workout(id: String!): Workout
        workouts: [Workout]
    }
    type Mutation {
        createUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        createWorkout(task: String!, userId: String!, completed: Boolean): Workout
    }
`;

module.exports = typeDefs;
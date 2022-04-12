/* typeDefs is short for typeDefinitions */
const { gql } = require('apollo-server-express');


// Queries and Mutations
const typeDefs = gql`
    type User {
        _id: ID
        username: String
        nameLength: Int
        email: String
        createdWorkoutIds: [ID]
        createWorkouts: [Workout]
    }
    type Auth {
        token: String
        user: User
    }
    type Workout {
        _id: ID!
        name: String
        focusId: String
        focus: String
        
    }
    
    

    type Query {

        user(id: String!): User
        users: [User]
        workout(_id: String!): Workout
        workouts: [Workout]
    }
    type Mutation {
        createUser(username: String!, email: String!, password: String!): Auth
        login(username: String!, password: String!): Auth
        createWorkout(_id: String!): User

    }
`;

module.exports = typeDefs;
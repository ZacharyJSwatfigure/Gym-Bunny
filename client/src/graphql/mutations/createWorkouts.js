import { gql } from '@apollo/client';

// export const CREATE_WORKOUT = gql`
//     mutation createWorkout($workout: String!, $userId: String!, $completed: Boolean) {
//         createWorkout(workout: $workout, userId: $userId, completed: $completed) {
//             _id
//             username
//             workouts {
//                 _id
//                 exercise
//                 completed
//                 focus
//             }
//         }
//     }
// `;


// this is one that we added for thie new schema stuff

export const ADD_WORKOUT = gql`
    mutation selectWorkout($_id: String!) {
        selectWorkout(_id: $_id) {
            _id
            email
            username
        }
    }
`;
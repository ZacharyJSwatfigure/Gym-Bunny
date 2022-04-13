import { gql } from '@apollo/client';

// export const CREATE_WORKOUT = gql`
//     mutation createWorkout($workout: String!, $userId: String!) {
//         createWorkout(workout: $workout, userId: $userId) {
//             _id
//             username
//             workouts {
//                 _id
//                 name
//                 focus
//             }
//         }
//     }
// `;


// this is one that we added for thie new schema stuff

export const CREATE_WORKOUT = gql`
    mutation createWorkout($_id: String!) {
        createWorkout(_id: $_id) {
            _id
            
        }
    }
`;
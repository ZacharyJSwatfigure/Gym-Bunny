import { gql } from '@apollo/client';

export const CREATE_WORKOUT = gql`
    mutation createWorkout($workout: String!, $createdWorkoutIds: [String!]) {
        createWorkout(workout: $workout, createdWorkoutIds: $createdWorkoutIds) {
            _id
            username
            workouts {
                _id
                name
                focus
            }
        }
    }
`;


// this is one that we added for thie new schema stuff

// export const CREATE_WORKOUT = gql`
//     mutation createWorkout($userId: String!, $createWorkouts: String) {
//         createWorkout(userId: $userId, createWorkouts: $createWorkouts) {
//             _id
//             username
//             createdWorkoutIds
//         }
//     }
// `;


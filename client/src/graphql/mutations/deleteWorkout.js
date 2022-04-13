import { gql } from '@apollo/client';

export const DELETE_WORKOUT = gql`
    mutation deleteWorkout($workout: String!, $createdWorkoutIds: [String!]) {
        deleteWorkout(workout: $workout, createdWorkoutIds: $createdWorkoutIds) {
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
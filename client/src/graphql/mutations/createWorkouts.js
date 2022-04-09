import { gql } from '@apollo/client';

export const CREATE_WORKOUT = gql`
    mutation createWorkout($workout: String!, $userId: String!, $completed: Boolean) {
        createWorkout(workout: $workout, userId: $userId, completed: $completed) {
            _id
            username
            workouts {
                _id
                exercise
                completed
                focus
            }
        }
    }
`;
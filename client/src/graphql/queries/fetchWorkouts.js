
import { gql } from '@apollo/client';

export const FETCH_WORKOUTS = gql`
query fetchWorkouts {
    workouts{
    _id
    workout
    }
}
`;
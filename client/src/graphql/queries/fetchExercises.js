import { gql } from "@apollo/client";

export const FETCH_EXERCISES = gql`
  query fetchExercises {
    workouts {
      _id
      name
      focusId
    }
  }
`;

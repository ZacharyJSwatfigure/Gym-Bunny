import { gql } from "@apollo/client";

export const FETCH_USER = gql`
  query user {
    user {
      _id
      username
    }
  }
`;

export const FETCH_WORKOUTS = gql`
  query workouts {
    workouts {
      _id
      userId
      exercises {
        _id
        focusId
        name
      }
    }
  }
`;

export const FETCH_EXERCISES = gql`
  query exercises($focusId: String) {
    exercises(focusId: $focusId) {
      _id
      focusId
      name
    }
  }
`;

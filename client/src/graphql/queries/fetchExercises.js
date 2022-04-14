import { gql } from "@apollo/client";

export const FETCH_EXERCISES = gql`
  query Query($focusId: String) {
    exercises(focusId: $focusId) {
      focusId
      name
    }
  }
`;

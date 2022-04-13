import { gql } from "@apollo/client";

export const DELETE_WORKOUT = gql`
  mutation deleteWorkout($id: String!) {
    deleteWorkout(id: $id)
  }
`;

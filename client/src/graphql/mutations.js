import { gql } from "@apollo/client";

//* User
//#region
export const CREATE_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!) {
    createUser(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($username: String, $email: String, $password: String) {
    updateUser(username: $username, email: $email, password: $password)
  }
`;

export const LOGIN = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const LOGOUT = gql`
  mutation {
    logout
  }
`;
//#endregion

//* Workout
//#region
export const CREATE_WORKOUT = gql`
  mutation createWorkout($exercises: [ExerciseInput]!) {
    createWorkout(exercises: $exercises)
  }
`;
//#endregion

//* Exercise
//#region
export const CREATE_EXERCISE = gql`
  mutation createExercise($focusId: String!, $name: String!) {
    createExercise(focusId: $focusId, name: $name) {
      exercise {
        _id
        name
        focusId
      }
    }
  }
`;

export const DELETE_EXERCISE = gql`
  mutation deleteExercise($id: ID!) {
    createExercise(id: $id)
  }
`;
//#endregion

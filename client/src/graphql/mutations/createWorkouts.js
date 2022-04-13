import { gql } from "@apollo/client";

export const CREATE_WORKOUT = gql`
  query createWorkout($focusId: String) {
    workouts(focusId: $focusId) {
      _id
      name
      userId
      focusId
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

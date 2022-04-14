import { FETCH_USER, FETCH_WORKOUTS, FETCH_EXERCISES } from "./queries";
import {
  CREATE_USER,
  UPDATE_USER,
  LOGIN,
  LOGOUT,
  CREATE_WORKOUT,
  CREATE_EXERCISE,
  DELETE_EXERCISE,
} from "./mutations";

export const queries = {
  fetchUser: FETCH_USER,
  fetchWorkouts: FETCH_WORKOUTS,
  fetchExercises: FETCH_EXERCISES,
};

export const userMutations = {
  createUser: CREATE_USER,
  updateUser: UPDATE_USER,
  login: LOGIN,
  logout: LOGOUT,
};

export const workoutMutations = {
  createWorkout: CREATE_WORKOUT,
};

export const exerciseMutations = {
  createExercise: CREATE_EXERCISE,
  deleteExercise: DELETE_EXERCISE,
};
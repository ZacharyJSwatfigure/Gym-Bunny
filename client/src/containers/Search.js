import React, { useState } from "react";
import "../style/Search.css";
import { useQuery, useMutation } from "@apollo/client";

import { queries, workoutMutations } from "../graphql";
import { Exercise } from "../components/Exercise";

export default function Search() {
  const [focusId, setFocusId] = useState("");
  const [test, setTest] = useState("");

  const [exercises, setExercises] = useState([]);

  const { loading, error, data, refetch } = useQuery(queries.fetchExercises);
  const [saveWorkout, { workoutError }] = useMutation(
    workoutMutations.createWorkout
  );

  const handleFocusIdChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFocusId(value);
  };

  const searchAgain = () => {
    refetch(
      focusId && focusId !== ""
        ? {
            focusId,
          }
        : null
    );
  };

  const addToWorkout = (exercise) => {
    const updatedExercises = exercises;
    const newEx = {
      name: exercise.name,
      focusId: exercise.focusId,
    };
    alert(`added ${exercise.name}`);
    updatedExercises.push(newEx);
    const list = updatedExercises.length.toString();
    setTest(list);
    setExercises(updatedExercises);
  };

  const saveCurrentWorkout = () => {
    const { id } = saveWorkout({ variables: { exercises } });
    console.log(id);
    alert(`added to saves`);
  };

  return (
    <div>
      <select onChange={handleFocusIdChange}>
        <option value="">All</option>
        <option value="1">Abs</option>
        <option value="2">Arms</option>
        <option value="3">Arms</option>
        <option value="4">Arms</option>
        <option value="5">Arms</option>
        <option value="6">Arms</option>
        <option value="7">Arms</option>
      </select>
      <button onClick={searchAgain}>Search</button>
      <div>
        <p>
          Exercises in workout:{" "}
          {exercises.map((ex, index) => {
            return <p>{ex.name}</p>;
          })}
        </p>

        <button onClick={saveCurrentWorkout}>Save workout</button>
      </div>

      <div>
        {!data
          ? null
          : data.exercises.map((exercise, index) => {
              return (
                <Exercise
                  key={index}
                  exercise={exercise}
                  addToWorkout={addToWorkout}
                />
              );
            })}
      </div>
    </div>
  );
}

import React, { useState } from "react";
import "../style/Search.css";
import { useQuery, useMutation } from "@apollo/client";

import { queries, workoutMutations } from "../graphql";
import { Exercise } from "../components/Exercise";

export default function Search() {
  const [focusId, setFocusId] = useState("");

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
    updatedExercises.push(newEx);
    setExercises(updatedExercises);
  };

  const saveCurrentWorkout = () => {
    const { id } = saveWorkout({ variables: { exercises } });
    console.log(id);
  };

  return (
    <div>
      <input value={focusId} onChange={handleFocusIdChange} />
      <button onClick={searchAgain}>Search again</button>
      {exercises && exercises.length > 0 ? (
        <div>
          <p>
            Exercises in workout:{" "}
            {exercises.map((ex, index) => {
              return <p>{ex.name}</p>;
            })}
          </p>
          <button onClick={saveCurrentWorkout}>Save workout</button>
        </div>
      ) : null}
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

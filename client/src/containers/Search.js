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
    updatedExercises.push(newEx);
    const list = updatedExercises.length.toString();
    setTest(list);
    setExercises(updatedExercises);
  };

  const saveCurrentWorkout = () => {
    const { id } = saveWorkout({ variables: { exercises } });
    console.log(id);
    alert(`Workout saved! refresh saved list to view`);
  };

  return (
    <div className="searchAllHolder">
      <section className="sectionBox">
        <select className="selectContainer" onChange={handleFocusIdChange}>
          <option className="dropdownItem" value="">
            All
          </option>
          <option className="dropdownItem" value="1">
            Abs
          </option>
          <option className="dropdownItem" value="2">
            Arms
          </option>
          <option className="dropdownItem" value="3">
            Back
          </option>
          <option className="dropdownItem" value="4">
            Calves
          </option>
          <option className="dropdownItem" value="5">
            Chest
          </option>
          <option className="dropdownItem" value="6">
            Legs
          </option>
          <option className="dropdownItem" value="7">
            Shoulders
          </option>
        </select>
        <button className="searchButton" onClick={searchAgain}>
          Search
        </button>
        <div>
          <p className="currentListHeader">
            Current Exercises in Workout:{" "}
            {exercises.map((ex, index) => {
              return <p className="currentListItems">{ex.name}</p>;
            })}
          </p>

          <button className="saveButton" onClick={saveCurrentWorkout}>
            Save Workout List
          </button>
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
      </section>
    </div>
  );
}

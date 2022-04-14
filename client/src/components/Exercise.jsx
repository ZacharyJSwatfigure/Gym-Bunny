import React from "react";

export const Exercise = ({ exercise, addToWorkout }) => {
  return (
    <div>
      <h2>{exercise.name}</h2>
      <span
        onClick={() => {
          addToWorkout(exercise);
        }}
      >
        Add to workout
      </span>
    </div>
  );
};
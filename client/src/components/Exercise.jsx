import React from "react";
import '../style/Exercise.css';

export const Exercise = ({ exercise, addToWorkout }) => {
  return (
    <div className = 'container'>
      <h2 className = 'title'><p className = 'description'>{exercise.name}</p></h2>
      <span className = 'exerciseSpan'
        onClick={() => {
          addToWorkout(exercise);
        }}
      >
        <button className= 'addBtn'>Add to workout</button>
      </span>
    </div>
  );
};
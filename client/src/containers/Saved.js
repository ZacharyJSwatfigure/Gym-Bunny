import React from "react";
import "../style/Saved.css";
import { useQuery } from "@apollo/client";
import { queries } from "../graphql";

export default function Login() {
  const { loading, error, data } = useQuery(queries.fetchWorkouts);
  console.log(JSON.stringify(data));
  return (
    <div>
      <h3 className="headerSaved">Saved workouts:</h3>
      {!data ? null : (
        <div className="workoutContainer">
          {data.workouts.map((wo, index) => {
            return (
              <div className="workout-item" key={index}>
                <p className="workoutNumber">Workout {index}</p>
                <ol className="workoutOl">
                  {wo.exercises.map((ex, index) => {
                    return <li className="liWorkout">{ex.name}</li>;
                  })}
                </ol>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

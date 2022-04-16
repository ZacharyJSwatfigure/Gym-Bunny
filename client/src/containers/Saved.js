import React from "react";
import "../style/Login.css";
import { useQuery } from "@apollo/client";
import { queries } from "../graphql";

export default function Login() {
  const { loading, error, data } = useQuery(queries.fetchWorkouts);
  console.log(JSON.stringify(data));
  return (
    <div>
      <h3>Saved workouts:</h3>
      {!data ? null : (
        <div>
          {data.workouts.map((wo, index) => {
            return (
              <div className="workout-item" key={index}>
                <p className="workoutNumber">Workout {index}</p>
                {wo.exercises.map((ex, index) => {
                  return <p>{ex.name}</p>;
                })}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

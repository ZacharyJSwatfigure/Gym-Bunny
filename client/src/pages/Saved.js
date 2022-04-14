import React from "react";
import "../style/Login.css";
import { useQuery } from "@apollo/client";
import { FETCH_WORKOUTS } from "../graphql/queries/fetchWorkouts";
import Auth from "../utils/auth";

export default function Login() {
  const { loading, error, data } = useQuery(FETCH_WORKOUTS);
  console.log(JSON.stringify(data));
  return <h1>Login</h1>;
}

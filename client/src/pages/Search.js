import React, { useState, useEffect } from "react";
import "../style/Search.css";
import { useQuery } from "@apollo/client";
import { FETCH_EXERCISES } from "../graphql/queries/fetchExercises";

export default function Search() {
  const { loading, error, data } = useQuery(FETCH_EXERCISES, {
    variables: { focusId: "1" },
  });

  // const searchExcercises = async () => {
  //   const { data } = await fetchExercises({
  //     variables: {
  //       focusId: "1",
  //     },
  //   });
  //   console.log("im hit!" + data);
  // };

  // return <button onClick={searchExcercises}>abs</button>;

  return <button>abs</button>;
}

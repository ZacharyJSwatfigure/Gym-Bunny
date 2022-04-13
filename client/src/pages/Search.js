import React, { useState, useEffect } from "react";
import "../style/Search.css";
import { useQuery } from "@apollo/client";
import { FETCH_EXERCISES } from "../graphql/queries/fetchExercises";

export default function Search() {
  const [focusId, setFocusId] = useState({
    focusId: null,
  });
  const [fetchedExercises, setFetchedExercises] = useState([]);

  const [exercise] = useQuery(FETCH_EXERCISES);

  const searchExercise = async (event) => {
    event.preventDefault();
    const response = await exercise({
      variables: {
        focusId,
      },
    });
  };

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;

    setFocusId({
      ...focusId,
      [name]: value,
    });
  };

  return (
    <div>
      <button onClick={handleChange} value="1">
        abs
      </button>
    </div>
  );
}

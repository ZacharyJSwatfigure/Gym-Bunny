import React, { useState, useEffect } from "react";
import "../style/Search.css";
import { useQuery } from "@apollo/client";
import { FETCH_EXERCISES } from "../graphql/queries/fetchExercises";

export default function Search() {
  const [focusId, setFocusId] = useState("");

  const [fetchedExercises, setFetchedExercises] = useState([]);

  const { exercises } = useQuery(FETCH_EXERCISES);

  const handleOnChange = (e) => {
    e.preventDefault();
    const newFocusId = e.target.value.toString();
    setFocusId(newFocusId);
  };

  const handleOnSearch = async () => {
    const res = await exercises({
      variables: {
        focusId,
      },
    });
    setFetchedExercises(res);
  };

  return (
    <div>
      <input onChange={handleOnChange} />
      <button onClick={handleOnSearch}>Search</button>
      <div>
        {fetchedExercises.map((e, index) => {
          return (
            <div>
              <h1>{e.name}</h1>
              <p>{e.focusId}</p>
              <p>{e.userId}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

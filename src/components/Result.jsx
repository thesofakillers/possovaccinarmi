import React from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../state/rootSlice";

export const Result = (props) => {
  const dispatch = useDispatch();
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetState());
  };
  return (
    <div>
      <h2>{props.outcome ? "Puoi vaccinarti" : "Non puoi vaccinarti"}</h2>
      <button onClick={handleReset}>Ricomincia</button>
    </div>
  );
};

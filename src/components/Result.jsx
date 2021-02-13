import React from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../state/rootSlice";

const resultMap = {
  0: "Puoi vaccinarti",
  1: "Non puoi vaccinarti, per ora.",
  2: (
    <p>
      Puoi vaccinarti a seconda della regione di residenza.<br></br>
      Controlla il{" "}
      <a
        href="https://www.agenas.gov.it/#customHP"
        target="_blank"
        rel="noreferrer"
      >
        sito sanitario della tua regione
      </a>
      .
    </p>
  ),
};

export const Result = (props) => {
  const dispatch = useDispatch();
  const handleReset = (e) => {
    e.preventDefault();
    dispatch(resetState());
  };
  return (
    <div>
      <div className="block is-size-3 is-size-5-mobile">
        {resultMap[props.outcome]}
      </div>
      <div className="block is-centered">
        <button className="button is-black is-large " onClick={handleReset}>
          Ricomincia
        </button>
      </div>
    </div>
  );
};

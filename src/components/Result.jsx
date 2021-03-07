import React from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../state/rootSlice";
import { ControllaRegione } from "./ControllaRegione";

const resultMap = {
  0: "Puoi vaccinarti. Sarete contattati con chiamata attiva.",
  1: "Non puoi vaccinarti, per ora.",
  2: (
    <div>
      Puoi vaccinarti. <ControllaRegione end={","} />
      oppure rivolgiti al tuo medico curante.
    </div>
  ),
  3: (
    <div>
      Puoi vaccinarti.<br></br>
      Rivolgiti alla struttura dove sono in carico le tue terapie.
      <ControllaRegione />
      Oppure rivolgiti al tuo medico curante.
    </div>
  ),
  4: (
    <div>
      Puoi vaccinarti a seconda della regione di residenza.
      <ControllaRegione />
    </div>
  ),
  5: (
    <div>
      Puoi vaccinarti a seconda della regione di residenza.<br></br>
      Chiedi ulteriori informazioni alla tua amministrazione.
    </div>
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

import React from "react";

export const ControllaRegione = ({ end = "." }) => {
  return (
    <div>
      Controlla il{" "}
      <a
        href="https://www.agenas.gov.it/#customHP"
        target="_blank"
        rel="noreferrer"
      >
        sito sanitario della tua regione
      </a>
      {end}
    </div>
  );
};

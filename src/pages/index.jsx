import React from "react";
import { Layout } from "../components/Layout";

export default () => (
  <Layout>
    <h1 className="title is-1 is-size-2-mobile">Posso Vaccinarmi?</h1>
    <div className="columns is-centered">
      <h5 className="subtitle column is-5">
        <span role="img" aria-label="2 smiles">
          {" "}
          😊😊{" "}
        </span>
        Sì
        <span role="img" aria-label="2 smiles">
          {" "}
          😊😊{" "}
        </span>
      </h5>
    </div>
    <div className="columns is-centered">
      <div className="column">
        Per ulteriori informazioni, controlla il
        <a
          href="https://www.agenas.gov.it/#customHP"
          target="_blank"
          rel="noreferrer"
        >
          {" "}
          sito della tua regione
        </a>
      </div>
    </div>
  </Layout>
);

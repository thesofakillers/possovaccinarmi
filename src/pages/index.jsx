import React from "react";
import { Helmet } from "react-helmet";
import DecisionTree from "../components/DecisionTree";

export default () => (
  <div>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Posso Vaccinarmi?</title>
      <link rel="canonical" href="https://possovaccinarmi.it" />
    </Helmet>
    <div style={{ margin: `1.45rem` }}>
      <h1>Posso Vaccinarmi?</h1>
      <DecisionTree />
    </div>
  </div>
);

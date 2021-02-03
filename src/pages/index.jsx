import * as React from "react";
import VegaSpec from "../../content/decisioni.vg.json";
import VegaData from "../../content/flare.json";
import { Vega } from "react-vega";

export default () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>Hello World!</h1>
    <div>{VegaSpec.description}</div>
    <Vega spec={VegaSpec} data={VegaData} />
  </div>
);

import * as React from "react";
import VegaSpec from "../../content/decisioni.vg.js";
import VegaData from "../../content/data.json";
import { Vega } from "react-vega";

export default () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>Hello World!</h1>
    <div>{VegaSpec.description}</div>
    <Vega
      spec={VegaSpec}
      data={{ "node-data": VegaData.nodes, "link-data": VegaData.links }}
    />
  </div>
);

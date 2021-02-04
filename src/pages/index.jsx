import * as React from "react";
import { Flowchart } from "react-flowchart.js";

const nodes = [
  {
    type: "start",
    id: "my_start_node",
    label: "Start flow",
    state: "highlighted", // Support for flowstate (allows you to modify the styling of a node based on this value)
    connection: {
      id: "my_condition_node",
      position: "bottom",
    },
  },
  {
    type: "condition",
    id: "my_condition_node",
    label: "True or false?",
    connections: {
      yes: {
        id: "dummy_node",
        position: "right",
      },
      no: {
        id: "my_operation_node",
        position: "bottom",
      },
    },
  },
  {
    type: "operation",
    id: "my_operation_node",
    label: "Foo operation",
  },
  {
    type: "inputoutput",
    id: "dummy_node",
    label: "Dummy",
    connection: {
      id: "end",
      position: "bottom",
    },
  },
  {
    type: "end",
    id: "end",
    label: "End flow",
  },
];

// Config (optional) - here we configure the flowchart, eg. line width, font family, arrow type, yes and no texts, etc.
const config = {
  lineWidth: 3,
  yesText: "Yes!",
  noText: "No",
};

// Styles (optional) - here we define the base styling for our nodes based on the node type (the "type" property)
const styles = {
  condition: {
    fill: "lightyellow",
  },
  operation: {
    fill: "lightblue",
    "font-color": "red",
  },
  inputoutput: {
    fill: "green",
    "font-color": "white",
  },
};

// States (optional) - here we define styling for the flowstate defined on nodes (the "state" property)
const states = {
  highlighted: {
    fill: "orange",
    "font-color": "blue",
  },
};

// OnClick (optional) - here we define a callback for when clicking a node
const onClick = (item, mouseEvent) => {
  console.log("Item clicked:", item);
  console.log("Mouse event:", mouseEvent);
};

export default () => (
  <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
    <h1>Hello World!</h1>
    <Flowchart
      nodes={nodes}
      config={config}
      styles={styles}
      states={states}
      onClick={onClick}
    />
  </div>
);

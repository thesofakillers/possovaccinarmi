import React, { Component } from "react";

const nodes = [
  {
    type: "start",
    id: "my_start_node",
    label: "Posso vaccinarmi contro il COVID19?",
    state: "highlighted", // Support for flowstate (allows you to modify the styling of a node based on this value)
    connection: {
      id: "ospite_rsa",
      position: "bottom",
    },
  },
  {
    type: "condition",
    id: "ospite_rsa",
    label: "Sei un ospite di un' RSA?",
    connections: {
      yes: {
        id: "puoi_vaccinarti",
        position: "bottom",
      },
      no: {
        id: "personale_rsa",
        position: "right",
      },
    },
  },
  {
    type: "condition",
    id: "personale_rsa",
    label: "Fai parte del personale di un' RSA?",
    connections: {
      yes: {
        id: "puoi_vaccinarti",
        position: "bottom",
      },
      no: {
        id: "sanitari_sociosanitari",
        position: "right",
      },
    },
  },
  {
    type: "condition",
    id: "sanitari_sociosanitari",
    label: "Sei un operatore sanitario o sociosanitario?",
    connections: {
      yes: {
        id: "puoi_vaccinarti",
        position: "bottom",
      },
      no: {
        id: "non_puoi_vaccinarti",
        position: "right",
      },
    },
  },
  {
    type: "end",
    id: "puoi_vaccinarti",
    label: "Puoi vaccinarti!",
  },
  {
    type: "end",
    id: "non_puoi_vaccinarti",
    label: "Non puoi vaccinarti, per ora.",
  },
];

// Config (optional) - here we configure the flowchart, eg. line width, font family, arrow type, yes and no texts, etc.
const config = {
  lineWidth: 3,
  yesText: "Sì!",
  noText: "No",
  arrowEnd: "block",
  scale: 0.8,
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

class DecisionTree extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowComponent: false };
  }
  componentDidMount() {
    import("react-flowchart.js")
      .then((res) => {
        this.Flowchart = res.Flowchart;
        this.setState({ windowAvailable: true });
      })
      .catch((error) => console.error("HELLO"));
  }
  render() {
    if (this.state.windowAvailable) {
      return (
        <this.Flowchart
          nodes={nodes}
          config={config}
          styles={styles}
          states={states}
          onClick={onClick}
        />
      );
    } else {
      return <div></div>;
    }
  }
}

export default DecisionTree;
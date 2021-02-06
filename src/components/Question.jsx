import React from "react";

const questionNumberMap = {
  0: "Sei un ospite di un' RSA?",
  1: "Fai parte del personale di un' RSA?",
  2: "Sei un operatore sanitario o sociosanitario?",
};

export const Question = (props) => {
  return <div>{questionNumberMap[props.number]}</div>;
};

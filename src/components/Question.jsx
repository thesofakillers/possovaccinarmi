import React from "react";
import { useDispatch } from "react-redux";
import {
  chooseOperatoreSS,
  chooseOspiteRSA,
  choosePersonaleRSA,
  setQuestion,
} from "../state/rootSlice";

const questionNumberMap = {
  0: {
    questionText: "Sei un ospite di un' RSA?",
    questionDispatch: chooseOspiteRSA,
  },
  1: {
    questionText: "Fai parte del personale di un' RSA?",
    questionDispatch: choosePersonaleRSA,
  },
  2: {
    questionText: "Sei un operatore sanitario o sociosanitario?",
    questionDispatch: chooseOperatoreSS,
  },
};

export const Question = (props) => {
  const dispatch = useDispatch();

  const questionInfo = questionNumberMap[props.number];

  const handleYes = (e) => {
    e.preventDefault();
    dispatch(questionInfo.questionDispatch(true));
    console.log("Yes");
  };
  const handleNo = (e) => {
    e.preventDefault();
    dispatch(questionInfo.questionDispatch(false));
    dispatch(setQuestion(props.number + 1));
    console.log("No");
  };
  return (
    <div>
      <h2>{questionInfo.questionText}</h2>
      <button onClick={handleYes}>Sì</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

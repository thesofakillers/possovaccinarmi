import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion, setQuestion } from "../state/rootSlice";

export const Question = (props) => {
  const dispatch = useDispatch();
  const questionNumber = props.number;
  const questionText = props.text;

  const handleYes = (e) => {
    e.preventDefault();
    dispatch(answerQuestion({ number: questionNumber, answer: true }));
  };
  const handleNo = (e) => {
    e.preventDefault();
    dispatch(answerQuestion({ number: questionNumber, answer: false }));
    dispatch(setQuestion(questionNumber + 1));
  };
  return (
    <div>
      <h2>{questionText}</h2>
      <button onClick={handleYes}>Sì</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

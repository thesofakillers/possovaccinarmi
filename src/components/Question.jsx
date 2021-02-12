import React from "react";
import { useDispatch } from "react-redux";
import { answerQuestion, setQuestion } from "../state/rootSlice";

const questionMap = {
  0: { text: "Sei un ospite di un' RSA?", nextQuestion: 1 },
  1: { text: "Fai parte del personale di un' RSA?", nextQuestion: 2 },
  2: { text: "Sei un operatore sanitario o sociosanitario?", nextQuestion: 3 },
  3: { text: "Hai almeno 80 anni?", nextQuestion: null },
};

export const Question = (props) => {
  const dispatch = useDispatch();
  const questionID = props.id;
  const questionText = questionMap[questionID].text;
  const nextQuestion = questionMap[questionID].nextQuestion;

  const handleYes = (e) => {
    e.preventDefault();
    dispatch(answerQuestion({ question_id: questionID, answer: true }));
  };
  const handleNo = (e) => {
    e.preventDefault();
    dispatch(answerQuestion({ question_id: questionID, answer: false }));
    dispatch(setQuestion(nextQuestion));
  };
  return (
    <div>
      <h2>{questionText}</h2>
      <button onClick={handleYes}>Sì</button>
      <button onClick={handleNo}>No</button>
    </div>
  );
};

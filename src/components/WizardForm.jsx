import React from "react";
import { useSelector } from "react-redux";
import { Question } from "./Question";
import { Result } from "./Result";

function checkResult(questionList, currentQuestion) {
  let resultOutcome = null;

  if (
    questionList
      .filter((q) => q.id !== 3)
      .map((q) => q.value)
      .some((value) => value === true)
  ) {
    resultOutcome = 0;
  } else if (
    questionList.map((q) => q.value).every((value) => value === false) &&
    currentQuestion === null
  ) {
    resultOutcome = 1;
  } else if (questionList.find((q) => q.id === 3).value === true) {
    resultOutcome = 2;
  }
  return resultOutcome;
}

export const WizardForm = () => {
  const state = useSelector((state) => state);

  const currentQuestion = state.currentQuestion;
  const questions = state.questions;
  const resultOutcome = checkResult(questions, currentQuestion);
  if (resultOutcome === null) {
    return <Question id={currentQuestion} />;
  } else {
    return <Result outcome={resultOutcome} />;
  }
};

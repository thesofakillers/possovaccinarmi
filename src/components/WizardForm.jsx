import React from "react";
import { useSelector } from "react-redux";
import { Question } from "./Question";
import { Result } from "./Result";

/*
 * checks if any of the questions specified in idList are true in
 * questionList
 */
function checkSomeTrue(objectList, idList) {
  let result = objectList
    .filter((o) => idList.includes(o.id))
    .map((filteredO) => filteredO.value)
    .some((value) => value === true);
  return result;
}

function checkResult(questionList, currentQuestion) {
  let resultOutcome = null;

  // compute which result outcome to show as defined in Result.jsx
  if (checkSomeTrue(questionList, [0, 1, 2])) {
    resultOutcome = 0;
  } else if (questionList.find((q) => q.id === 3).value === true) {
    resultOutcome = 2;
  } else if (questionList.find((q) => q.id === 5).value === true) {
    resultOutcome = 3;
  } else if (checkSomeTrue(questionList, [4, 6, 7, 8])) {
    resultOutcome = 4;
  } else if (checkSomeTrue(questionList, [9, 10, 11])) {
    resultOutcome = 5;
  } else if (
    questionList.map((q) => q.value).every((value) => value === false) &&
    currentQuestion === null
  ) {
    resultOutcome = 1;
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

import React from "react";
import { useSelector } from "react-redux";
import { Question } from "./Question";
import { Result } from "./Result";

function checkResult(questionList, questionNumber) {
  let resultOutcome = null;
  const questionValues = questionList.map((question) => question.value);
  if (questionValues.some((value) => value === true)) {
    resultOutcome = true;
  } else if (
    questionValues.every((value) => value === false) &&
    questionNumber >= questionValues.length
  ) {
    resultOutcome = false;
  }
  return resultOutcome;
}

export const WizardForm = () => {
  const state = useSelector((state) => state);

  const currentQuestion = state.currentQuestion;
  const questions = state.questions;
  const resultOutcome = checkResult(questions, currentQuestion);
  if (resultOutcome == null) {
    return (
      <Question
        number={currentQuestion}
        text={questions[currentQuestion].text}
      />
    );
  } else {
    return <Result outcome={resultOutcome} />;
  }
};

import React from "react";
import { useSelector } from "react-redux";
import { Question } from "./Question";
import { Result } from "./Result";

export const WizardForm = () => {
  const state = useSelector((state) => state);

  const resultReady =
    state.ospiteRSA || state.personaleRSA || state.operatoreSS;

  return (
    <div>
      {!resultReady ? <Question number={state.currentQuestion} /> : <Result />}
    </div>
  );
};

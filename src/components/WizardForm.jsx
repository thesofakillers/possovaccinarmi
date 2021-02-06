import React from "react";
import { useSelector } from "react-redux";
import { Question } from "./Question";

export const WizardForm = () => {
  const state = useSelector((state) => state);

  return (
    <div>
      <Question number={state.currentQuestion} />
    </div>
  );
};

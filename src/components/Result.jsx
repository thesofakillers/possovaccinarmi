import React from "react";
import { useSelector } from "react-redux";

export const Result = () => {
  const state = useSelector((state) => state);

  return (
    <>
      <pre>{JSON.stringify(state, null, 2)}</pre>
    </>
  );
};

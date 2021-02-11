import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentQuestion: 0,
  questions: [
    { text: "Sei un ospite di un' RSA?", value: false },
    { text: "Fai parte del personale di un' RSA?", value: false },
    { text: "Sei un operatore sanitario o sociosanitario?", value: false },
  ],
};

const rootSlice = createSlice({
  name: "root",
  initialState: initialState,
  reducers: {
    setQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    answerQuestion: (state, action) => {
      const number = action.payload.number;
      const answer = action.payload.answer;
      state.questions[number].value = answer;
    },
    resetState: (_state) => initialState,
  },
});

export const reducer = rootSlice.reducer;
export const { setQuestion, answerQuestion, resetState } = rootSlice.actions;

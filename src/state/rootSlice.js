import { createSlice } from "@reduxjs/toolkit";

let initialState = {
  currentQuestion: 0,
  questions: [
    { id: 0, value: false },
    { id: 1, value: false },
    { id: 2, value: false },
    { id: 3, value: false },
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
      const id = action.payload.question_id;
      const answer = action.payload.answer;
      const questionIndex = state.questions.findIndex((q) => q.id === id);
      state.questions[questionIndex].value = answer;
    },
    resetState: (_state) => initialState,
  },
});

export const reducer = rootSlice.reducer;
export const { setQuestion, answerQuestion, resetState } = rootSlice.actions;

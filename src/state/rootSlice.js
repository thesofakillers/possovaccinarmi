import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    currentQuestion: 0,
    ospiteRSA: false,
    personaleRSA: false,
    operatoreSS: false,
  },
  reducers: {
    setQuestion: (state, action) => {
      state.currentQuestion = action.payload;
    },
    chooseOspiteRSA: (state, action) => {
      state.ospiteRSA = action.payload;
    },
    choosePersonaleRSA: (state, action) => {
      state.personaleRSA = action.payload;
    },
    chooseOperatoreSS: (state, action) => {
      state.operatoreSS = action.payload;
    },
  },
});

export const reducer = rootSlice.reducer;
export const {
  setQuestion,
  chooseOspiteRSA,
  choosePersonaleRSA,
  chooseOperatoreSS,
} = rootSlice.actions;

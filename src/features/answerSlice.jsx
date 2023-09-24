import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  answer: null,
};

export const answerSlice = createSlice({
  name: "answer",
  initialState: initialState,
  reducers: {
    setAnswer: (state, action) => {
      state.answer = action.payload;
    },
  },
});

export const { setAnswer } = answerSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "steps",
  initialState,
  reducers: {
    addAStep: (state) => {
      state.value += 1;
    },
    resetSteps: (state) => {
      state.value = 0;
    },
  },
});

export const { addAStep, resetSteps } = counterSlice.actions;

export default counterSlice.reducer;

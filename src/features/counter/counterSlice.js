import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0, ///State variables
  },
  reducers: {
    increment: (state) => {
      //actions
      state.count++;
    },
    decrement: (state) => {
      state.count--;
      // state.count = state.count - 1;
    },
    decrementBy5: (state) => {
      state.count = state.count - 5;
    },
    incrementByAmount: (state, action) => {
      state.count += action.payload;
    },
  },
});

export const { increment, decrement, decrementBy5, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;

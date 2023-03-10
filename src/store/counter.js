// CREATE AND MANAGE THE COUNTER SPECIFIC STATE SLICE

import { createSlice } from '@reduxjs/toolkit';

// Create reducer function
const initialCounterState = { counter: 0, showCounter: true };

// CREATE SLICE
// It wants an object as an argument
const counterSlice = createSlice({
  name: 'counter',
  //   initialState: { counter: 0, showCounter: true },
  // initialState: initialState
  // Modern JavaScript Feature
  initialState: initialCounterState,
  // Map all the methods it needs
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    // We also get second paramter in reducer i.e action but it's optional
    increase(state, action) {
      //   state.counter = state.counter + action.amount;
      // Payload from redux toolkit
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      // Invert value
      state.showCounter = !state.showCounter;
    },
  },
});

// Export actions
export const counterActions = counterSlice.actions;

// export default counterSlice;
export default counterSlice.reducer;

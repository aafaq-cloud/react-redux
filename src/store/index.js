// Import createSlice from Redux Toolkit to create state slices
// Import configureStore to use it in replacement of createStore
import { createSlice, configureStore } from '@reduxjs/toolkit';

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

const initialAuthState = { isAuthenticated: false };

// Create auth slice
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

// Create store

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

// Export
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

// How to connect store with React App?
// For this we need to provide this store to the React App/.
// The question just is what does provide mean?
export default store;

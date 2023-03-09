// Redux logic
// Import redux object from redux package
// import redux from 'redux';
// OR
// Pull createStore from redux package
// import { createStore } from 'redux';

// Import createSlice from Redux Toolkit to create state slices
// Import configureStore to use it in replacement of createStore
import { createSlice, configureStore } from '@reduxjs/toolkit';

// RULES OF IDENTIFIERS
export const INCREMENT = 'increment';

// Create reducer function
/**
 * WORKING WITH MULTIPLE STATE PROPERTIES
 * For this, we need to add a new state a new piece of data to our Redux store. And how do we now do that? Well, to add a new piece of data, we need to go to our reducer in the end and just add it to all these state snapshots which we are producing. Let's start with the initial state snapshot.
 */

const initialState = { counter: 2, showCounter: true };

// CALL CREATE SLICE
// It wants an object as an argument
const counterSlice = createSlice({
  name: 'counter',
  //   initialState: { counter: 0, showCounter: true },
  // initialState: initialState
  // Modern JavaScript Feature
  initialState,
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
      state.counter = state.counter + action.amount;
    },
    toggleCounter(state) {
      // Invert value
      state.showCounter = !state.showCounter;
    },
  },
});

// Create store
// Create store wants a pointer at a reducer function as a parameter
// This now creates our Redux store
// const store = createStore(counterReducer);

// Register counter slice with our store
// Note: If we have multiple slices then we should have multiple reducers in bigger applications. So there is anohter package we should import from reduxjs/toolkit which is configureStore. It creates a store like createStore does but it makes merging multiple reducers into one reducer easier thereafter.
// const store = createStore(counterSlice.reducer);
// Pass an object
const store = configureStore({
  // Redux wants one  main reducer function which is responsible for the global state.
  /** THE CONFIGURE STORE METHOD FROM REDUX TOOLKIT
   * However, with configureStore, the value for reducer can be a single reducer so we can for example use counterSlice.reducer to use the reducer from that counterSlice which combines all those reducer methods to find in that slice. We can use that as a global main reducer and here that would make sense because this is the only state slice we have and therefore, the only reducer we have, but if we had multiple state slices in a bigger application something we're going to see later, then alternatively as a value for this reducer key, we could also set an object and in that object, we can set up any keys of our choice, so any property names of our choice and the values of those properties would then be different reducer functions.
   */
  /**
   * So we would create a map of reducers you could say, and this map is then set as a value for the main reducer and behind the scenes configureStore will merge all those reducers into one big reducer.
   */
  // reducer:
  // If we have multiple reducers
  // reducer: { counter: counterSlice.reducer}
  // Directly use becasuse we have only one reducer in our case
  /**
   * Now the question is, how do we dispatch actions? Because we don't have our own, if checks, we don't know what the identifiers for our actions should be. We just have these method names but how do we now know what to dispatch?
   */
  reducer: counterSlice.reducer,
});

// How to connect store with React App?
// For this we need to provide this store to the React App/.
// The question just is what does provide mean?
export default store;

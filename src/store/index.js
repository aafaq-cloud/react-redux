/**
 * SPLITTING OUR CODE
 */

// Import createSlice from Redux Toolkit to create state slices
// Import configureStore to use it in replacement of createStore
// import { createSlice, configureStore } from '@reduxjs/toolkit';
import { configureStore } from '@reduxjs/toolkit';

// Merge slice reducers together
// import counterSlice from './counter';
// import authSlice from './auth';

// Import reducers
import counterReducer from './counter';
import authReducer from './auth';

// Create store

// const store = configureStore({
//   reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
// });

// const store = configureStore({
//   reducer: { counter: counterSlice, auth: authSlice },
// });

const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer },
});

// Export
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;

// How to connect store with React App?
// For this we need to provide this store to the React App/.
// The question just is what does provide mean?
export default store;

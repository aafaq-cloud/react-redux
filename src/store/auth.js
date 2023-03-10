import { createSlice } from '@reduxjs/toolkit';

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

export const authActions = authSlice.actions;

// export default authSlice;
export default authSlice.reducer;

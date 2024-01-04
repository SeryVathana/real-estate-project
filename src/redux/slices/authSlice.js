import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: {
    isLoggedIn: false,
    userName: '',
    userId: '',
    userEmail: '',
  },
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logIn: (state, action) => {
      state.value.isLoggedIn = true;
      state.value.userName = action.payload.userName;
      state.value.userId = action.payload.userId;
      state.value.userEmail = action.payload.userEmail;
    },
    logOut: (state) => {
      state.value = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { logIn, logOut } = authSlice.actions;

export default authSlice.reducer;

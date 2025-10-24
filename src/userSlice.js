import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  username: window.localStorage.getItem("username"),
  token: window.localStorage.getItem("token"),
  isLoggedIn: window.localStorage.getItem("token") ? true : false,
};

export const userSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      console.log("update user");
      window.localStorage.setItem("token", action.payload.token);
      window.localStorage.setItem("username", action.payload.username);
      state.username = action.payload.username;
      state.token = action.payload.token;
      state.isLoggedIn = action.payload.isLoggedIn;
    },
    logout: (state) => {
      window.localStorage.removeItem("token");
      state.username = null;
      state.token = null;
      state.isLoggedIn = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, logout } = userSlice.actions;

const userReducer = userSlice.reducer;
export default userReducer;

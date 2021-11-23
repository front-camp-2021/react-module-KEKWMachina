import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "set-login-status",
  initialState: false,
  reducers: {
    setLoggedIn(state, action) {
        state = true;
        return true;
    },
    logOut(state, action) {
        state = false;
        return false;
    }
  },
});

export const { setLoggedIn, logOut } = loginSlice.actions;

export default loginSlice.reducer;

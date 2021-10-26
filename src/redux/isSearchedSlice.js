import { createSlice } from "@reduxjs/toolkit";

export const isSearchedSlice = createSlice({
  name: "isSearching",
  initialState: [],
  reducers: {
    isSearchedStatus: (state, action) => {
      const isSearched = action.payload.isSearchedStatus;
      state.push(isSearched);
    },
  },
});

export const { isSearchedStatus } = isSearchedSlice.actions;

export default isSearchedSlice.reducer;

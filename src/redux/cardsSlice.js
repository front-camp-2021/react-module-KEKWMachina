import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
  name: "searching",
  initialState: [],
  reducers: {
    clearSearchValue: (state) => {
      state.splice(1, state.length);
    },
  },
});

export const { clearSearchValue } = cardsSlice.actions;

export default cardsSlice.reducer;

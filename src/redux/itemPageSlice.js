import { createSlice } from "@reduxjs/toolkit";

export const itemPageSlice = createSlice({
  name: "add-card",
  initialState: {},
  reducers: {
    addDisplayedCard: (state, action) => {
      const card = action.payload.card;
      state = card;
      return state;
    },
  },
});

export const { addDisplayedCard } = itemPageSlice.actions;

export default itemPageSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const minMaxSlice = createSlice({
  name: "set-price-range",
  initialState: [[0, 0]],
  reducers: {
    setInitialPriceRange: (state, action) => {
      const inintialPriceRange = action.payload.inintialPriceRange;
      state.push(inintialPriceRange);
    },
    setPriceRange: (state, action) => {
      const priceRange = action.payload.priceRange;
      state.push(priceRange);
    },
    clearPriceRange: (state) => {
      state.splice(1, state.length);
    },
  },
});

export const { setPriceRange, clearPriceRange, setInitialPriceRange } = minMaxSlice.actions;

export default minMaxSlice.reducer;

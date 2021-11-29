import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { findMinMax } from "../helper-functions/findMinMax";

export const getCardData = createAsyncThunk(
  "categories/getCardData",
  async () => {
    const response = await fetch("http://localhost:3001/products");
    if (response.ok) {
      const cardData = await response.json();
      return { cardData };
    }
  }
);

export const minMaxSlice = createSlice({
  name: "set-price-range",
  initialState: [0, 0],
  reducers: {
    setInitialPriceRange: (state, action) => {
      const inintialPriceRange = action.payload.inintialPriceRange;
      state[0] = inintialPriceRange[0];
      state[1] = inintialPriceRange[1];
    },
    setPriceRange: (state, action) => {
      const priceRange = action.payload.priceRange;
      state[0] = priceRange[0];
      state[1] = priceRange[1];
    },
    clearPriceRange: (state) => {
      state.splice(2, state.length);
    },
  },
  extraReducers: {
    [getCardData.fulfilled]: (state, action) => {
      state = findMinMax(action.payload.cardData);
    },
  },
});

export const { setPriceRange, clearPriceRange, setInitialPriceRange } =
  minMaxSlice.actions;

export default minMaxSlice.reducer;

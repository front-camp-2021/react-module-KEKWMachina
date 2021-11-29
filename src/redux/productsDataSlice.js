import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getInitialData = createAsyncThunk(
  "categories/getCardData",
  async () => {
    const response = await fetch("http://localhost:3001/products");
    if (response.ok) {
      const cardData = await response.json();
      return { cardData };
    }
  }
);

export const selectedProductsSilce = createSlice({
  name: "set-selected-products",
  initialState: [],
  reducers: {
    setSelectedProducts(state, action) {
      state[1] = action.payload.selectedProducts;
    },
  },
  extraReducers: {
    [getInitialData.fulfilled]: (state, action) => {
      state[0] = action.payload.cardData;
    },
  },
});

export const { setSelectedProducts } =
  selectedProductsSilce.actions;

export default selectedProductsSilce.reducer;

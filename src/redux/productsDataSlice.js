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
    addToWishlist(state, action) {
      state[1].map((product) => {
        if (product.id === action.payload.id) {
          return product.isFavourite = !product.isFavourite;
        } else {
          return product;
        }
      });
    },
  },
  extraReducers: {
    [getInitialData.fulfilled]: (state, action) => {
      state[0] = action.payload.cardData;
      state[1] = action.payload.cardData;
    },
  },
});

export const { setSelectedProducts, addToWishlist } =
  selectedProductsSilce.actions;

export default selectedProductsSilce.reducer;

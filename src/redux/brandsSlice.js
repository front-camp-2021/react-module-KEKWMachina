import { createSlice } from "@reduxjs/toolkit";

export const brandsSlice = createSlice({
  name: "category-added",
  initialState: [],
  reducers: {
    addBrand: (state, action) => {
      const category = action.payload.category;
      state.push(category);
    },
    removeBrand: (state, action) => {
      state.splice(state.indexOf(action.payload.category), 1);
    },
    clearBrands: (state) => {
      state.splice(0, state.length - 1);
      state.pop();
    },
  },
});

export const { addBrand, removeBrand, clearBrands } = brandsSlice.actions;

export default brandsSlice.reducer;

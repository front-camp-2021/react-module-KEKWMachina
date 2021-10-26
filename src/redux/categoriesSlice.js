import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
  name: "category-added",
  initialState: [],
  reducers: {
    addCategory: (state, action) => {
      const category = action.payload.category;
      state.push(category);
    },
    removeCategory: (state, action) => {
      state.splice(state.indexOf(action.payload.category), 1);
    },
    clearCategories: (state) => {
      state.splice(0, state.length - 1);
      state.pop();
    },
  },
});

export const { addCategory, removeCategory, clearCategories } =
  categoriesSlice.actions;

export default categoriesSlice.reducer;

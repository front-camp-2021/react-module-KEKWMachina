import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getCategoriesData = createAsyncThunk(
  "categories/getCategoriesAsync",
  async () => {
    const response = await fetch("http://localhost:3001/categories");
    if (response.ok) {
      const categoriesData = await response.json();
      return { categoriesData };
    }
  }
);

export const categoriesDataSlice = createSlice({
  name: "set-categories-data",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCategoriesData.fulfilled]: (state, action) => {
      return action.payload.categoriesData;
    },
    [getCategoriesData.fulfilled]: (state, action) => {
      state.push(action.payload.categoriesData);
    },
  },
});

export const { setCategoriesData } = categoriesDataSlice.actions;

export default categoriesDataSlice.reducer;

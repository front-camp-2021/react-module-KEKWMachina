import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getBrandsData = createAsyncThunk(
  'categories/getBrandsAsync',
  async () => {
    const response = await fetch('http://localhost:3001/brands');
    if (response.ok) {
      const brandsData = await response.json();
      return { brandsData }
    }
  }
)

export const brandsDataSlice = createSlice({
  name: "set-brands-data",
  initialState: [null],
  reducers: {},
  extraReducers: {
    [getBrandsData.fulfilled]: (state, action) => {
      return action.payload.brandsData
    },
    [getBrandsData.fulfilled]: (state, action) => {
      state.push(action.payload.brandsData);
    },
  }
});

export const { setBrandsData } = brandsDataSlice.actions;

export default brandsDataSlice.reducer;

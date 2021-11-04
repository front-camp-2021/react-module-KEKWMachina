import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

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

export const cardsDataSlice = createSlice({
  name: "set-card-data",
  initialState: [],
  reducers: {
    setCardData: (state, action) => {
      const cardData = action.payload.cardData;
      state.push(cardData);
    },
    filterData: (state, action) => {
      if (action.payload.thumb === "thumb thumb--left") {
        state.push(
          state[0].filter((item) => {
            return (
              item.price >= action.payload.thumbValue &&
              item.price <= action.payload.rightThumbValue
            );
          })
        );
      } else if (action.payload.thumb === "thumb thumb--right") {
        state.push(
          state[0].filter((item) => {
            return (
              item.price >= action.payload.leftThumbValue &&
              item.price <= action.payload.thumbValue
            );
          })
        );
      }
    },
  },
  extraReducers: {
    [getCardData.fulfilled]: (state, action) => {
      return action.payload.cardData;
    },
    [getCardData.fulfilled]: (state, action) => {
      state.push(action.payload.cardData);
    },
  },
});

export const { setCardData, filterData } =
  cardsDataSlice.actions;

export default cardsDataSlice.reducer;

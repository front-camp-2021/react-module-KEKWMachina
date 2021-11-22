import { createSlice } from "@reduxjs/toolkit";

export const userInputSlice = createSlice({
  name: "set-user-input",
  initialState: '',
  reducers: {
    setUserInput: (state, action) => {
      const userInput = action.payload.userInput;
      state = userInput;
      return state;
    },
    clearSearchValue: (state) => {
      state = '';
      return state;
    },
  },
});

export const { setUserInput, clearSearchValue } = userInputSlice.actions;

export default userInputSlice.reducer;

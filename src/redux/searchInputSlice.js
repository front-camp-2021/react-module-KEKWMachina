import { createSlice } from "@reduxjs/toolkit";

export const userInputSlice = createSlice({
  name: "set-user-input",
  initialState: ['',],
  reducers: {
    setUserInput: (state, action) => {
      const userInput = action.payload.userInput;
      state.push(userInput);
    },
  },
});

export const { setUserInput } = userInputSlice.actions;

export default userInputSlice.reducer;

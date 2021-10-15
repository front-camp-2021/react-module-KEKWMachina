import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
	name: 'searching',
	initialState: [],
	reducers: {
		addSearchValue: (state, action) => {
            const searchParameter = action.payload.searchInput;
            state.push(searchParameter);
		},
	},
});


export const { addSearchValue } = cardsSlice.actions;

export default cardsSlice.reducer;
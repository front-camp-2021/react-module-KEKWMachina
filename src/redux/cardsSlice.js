import { createSlice } from '@reduxjs/toolkit';

export const cardsSlice = createSlice({
	name: 'searching',
	initialState: [],
	reducers: {
		addSearchValue: (state, action) => {
            const searchParameter = action.payload.searchInput;
            state.push(searchParameter);
		},
		clearSearchValue: (state) => {
			state.splice(1, state.length)
		},
	},
});


export const { addSearchValue, clearSearchValue } = cardsSlice.actions;

export default cardsSlice.reducer;
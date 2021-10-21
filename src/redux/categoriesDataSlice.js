import { createSlice } from '@reduxjs/toolkit';

export const categoriesDataSlice = createSlice({
	name: 'set-categories-data',
	initialState: [null],
	reducers: {
		setCategoriesData: (state, action) => {
            const categoriesData = action.payload.categoriesData;
            state.push(categoriesData);
		},
	},
});


export const { setCategoriesData } = categoriesDataSlice.actions;

export default categoriesDataSlice.reducer;
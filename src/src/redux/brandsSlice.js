import { createSlice } from '@reduxjs/toolkit';

export const brandsSlice = createSlice({
	name: 'category-added',
	initialState: [],
	reducers: {
		addBrand: (state, action) => {
			const category = action.payload.category;
			state.push(category);
		},
		removeBrand: (state, action) => {
			state.splice(state.indexOf(action.payload.category), 1)
		}
	},
});


export const { addBrand, removeBrand } = brandsSlice.actions;

export default brandsSlice.reducer;
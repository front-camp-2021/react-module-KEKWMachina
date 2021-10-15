import { createSlice } from '@reduxjs/toolkit';

export const categoriesSlice = createSlice({
	name: 'category-added',
	initialState: [],
	reducers: {
		addCategory: (state, action) => {
			const category = action.payload.category;
			state.push(category);
		},
		removeCategory: (state, action) => {
			state.splice(state.indexOf(action.payload.category), 1)
		}
	},
});


export const { addCategory, removeCategory } = categoriesSlice.actions;

export default categoriesSlice.reducer;
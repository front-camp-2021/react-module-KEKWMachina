import { createSlice } from '@reduxjs/toolkit';

export const wishlistSlice = createSlice({
	name: 'wishlistState',
	initialState: [],
	reducers: {
		addToWishlist: (state, action) => {
            state.push(action.payload.item);
		},
        removeFromWishlist: (state, action) => {
            state.splice(state.indexOf(action.payload.item), 1);
		},
		clearState: (state) => {
            state.splice(0, state.length - 1);
			state.pop();
		},
	},
});


export const { addToWishlist, removeFromWishlist, clearState } = wishlistSlice.actions;

export default wishlistSlice.reducer;
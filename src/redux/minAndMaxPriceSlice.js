import { createSlice } from '@reduxjs/toolkit';

export const minMaxSlice = createSlice({
	name: 'set-price-range',
	initialState: [[100, 50000]],
	reducers: {
        
		setPriceRange: (state, action) => {
            const priceRange = action.payload.priceRange;
            state.push(priceRange);
		},
        clearPriceRange: (state) => {
            state.splice(1, state.length);
		}
	},
});


export const { setPriceRange, clearPriceRange } = minMaxSlice.actions;

export default minMaxSlice.reducer;
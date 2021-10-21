import { createSlice } from '@reduxjs/toolkit';

export const brandsDataSlice = createSlice({
	name: 'set-brands-data',
	initialState: [null],
	reducers: {
		setBrandsData: (state, action) => {
            const brandsData = action.payload.brandsData;
            state.push(brandsData);
		},
	},
});


export const { setBrandsData } = brandsDataSlice.actions;

export default brandsDataSlice.reducer;
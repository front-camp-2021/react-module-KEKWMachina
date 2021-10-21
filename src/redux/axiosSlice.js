import { createSlice } from '@reduxjs/toolkit';

export const setDataReadyStatus = createSlice({
	name: 'data-ready-status',
	initialState: [false],
	reducers: {
		dataIsReady: (state, action) => {
            const dataIsReady = action.payload.status;
            state.push(dataIsReady);
		},
		
	},
});


export const { dataIsReady } = setDataReadyStatus.actions;

export default setDataReadyStatus.reducer;
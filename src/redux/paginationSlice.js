import { createSlice } from '@reduxjs/toolkit';

export const paginationSlice = createSlice({
	name: 'set-elements',
	initialState: [[0, 9, 1]],
	reducers: {
		setElements: (state, action) => {
            state.push(action.payload.indexesAndActivePage);
		},
        setPageBack: (state, action) => {
            state.push(action.payload.pageBackIndexes);
		},
        setPageForward: (state, action) => {
            state.push(action.payload.pageForwardIndexes);
		},
	},
});


export const { setElements, setPageBack, setPageForward } = paginationSlice.actions;

export default paginationSlice.reducer;
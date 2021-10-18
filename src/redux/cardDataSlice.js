import { createSlice } from '@reduxjs/toolkit';

export const cardsDataSlice = createSlice({
	name: 'set-card-data',
	initialState: [],
	reducers: {
		setCardData: (state, action) => {
            const cardData = action.payload.cardData;
            state.push(cardData);
		},
	},
});


export const { setCardData } = cardsDataSlice.actions;

export default cardsDataSlice.reducer;
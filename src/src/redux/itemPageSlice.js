import { createSlice } from '@reduxjs/toolkit';

export const itemPageSlice = createSlice({
    name: 'add-card',
    initialState: [],
    reducers: {
        addDisplayedCard: (state, action) => {
            const isSearched = action.payload.card;
            state.push(isSearched);
        },
    },
});


export const { addDisplayedCard } = itemPageSlice.actions;

export default itemPageSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './cardsSlice';
import searchStatusReducer from './isSearchedSlice';
import addCategoryReducer from './categoriesSlice';
import addBrandReducer from './brandsSlice';
import addToWishlistReducer from './wishlistSlice';
import itemPageReducer from './itemPageSlice';
import cardDataReducer from './cardDataSlice';
import categoriesDataReducer from './categoriesDataSlice';
import brandsDataSlice from './brandsDataSlice';
import axiosSlice from './axiosSlice';

export default configureStore({
	reducer: {
		searchParameter: searchReducer,
		searchStatus: searchStatusReducer,
		categories: addCategoryReducer,
		brands: addBrandReducer,
		wishlist: addToWishlistReducer,
		itempage: itemPageReducer,
		cardsData: cardDataReducer,
		categoriesData : categoriesDataReducer,
		brandsData : brandsDataSlice,
		dataIsReady: axiosSlice, 
	},
});
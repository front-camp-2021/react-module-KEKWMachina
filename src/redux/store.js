import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './cardsSlice';
import searchStatusReducer from './isSearchedSlice'
import addCategoryReducer from './categoriesSlice';
import addBrandReducer from './brandsSlice'
import addToWishlistReducer from './wishlistSlice';
import itemPageReducer from './itemPageSlice';

export default configureStore({
	reducer: {
		searchParameter: searchReducer,
		searchStatus: searchStatusReducer,
		categories: addCategoryReducer,
		brands: addBrandReducer,
		wishlist: addToWishlistReducer,
		itempage: itemPageReducer,
	},
});
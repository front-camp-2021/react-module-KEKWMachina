import { configureStore } from "@reduxjs/toolkit";
import addCategoryReducer from "./categoriesSlice";
import addBrandReducer from "./brandsSlice";
import itemPageReducer from "./itemPageSlice";
import categoriesDataReducer from "./categoriesDataSlice";
import brandsDataReducer from "./brandsDataSlice";
import paginationReducer from "./paginationSlice";
import minMaxReducer from "./minAndMaxPriceSlice";
import searchInputReducer from "./searchInputSlice";
import loginReducer from "./loggedInSlice";
import selectedProductsReducer from "./productsDataSlice";

export default configureStore({
  reducer: {
    categories: addCategoryReducer,
    brands: addBrandReducer,
    itempage: itemPageReducer,
    categoriesData: categoriesDataReducer,
    brandsData: brandsDataReducer,
    paginationElements: paginationReducer,
    priceRange: minMaxReducer,
    searchInput: searchInputReducer,
    loggedIn: loginReducer,
    selectedProducts: selectedProductsReducer,
  },
});

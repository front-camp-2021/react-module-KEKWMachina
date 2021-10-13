import { createStore, combineReducers } from "redux";
import { books } from "../features/books/reducers/books";
import { composeWithDevTools } from "redux-devtools-extension";

export const store = createStore(
  combineReducers({
    books,
    // other reducers from your app
  }),
  composeWithDevTools()
);

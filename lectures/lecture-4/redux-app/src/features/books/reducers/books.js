import { CHANGE_FAVORITE_STATUS, RESET_ALL_STATUS } from "../actions/actions";

export const booksInitialState = Array.from({ length: 10 })
  .fill(1)
  .map((_, id) => ({
    id,
    title: `Book #${id}`,
    author: `Mr. #${id} Author`,
    isFavorite: false,
    description: `Book #${id} is a fascinating book describing adventures of young coders, who has just started their journey`,
  }));

export function books(state = booksInitialState, action) {
  switch (action.type) {
    case CHANGE_FAVORITE_STATUS:
      return state.map((book) =>
        book.id === action.payload
          ? { ...book, isFavorite: !book.isFavorite }
          : book
      );

    case RESET_ALL_STATUS:
      return state.map((book) => {
        return {
          ...book,
          isFavorite: false,
        };
      });

    default:
      return state;
  }
}
